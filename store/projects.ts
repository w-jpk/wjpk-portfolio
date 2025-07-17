import { defineStore } from 'pinia'

export interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  githubData?: {
    stars: number
    forks: number
    watchers: number
    description: string
    homepage: string
  }
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchGithubData() {
      this.loading = true
      try {
        for (const project of this.projects) {
          if (project.githubUrl && project.githubUrl.startsWith('https://github.com/')) {
            const repoPath = project.githubUrl.replace('https://github.com/', '')
            const res = await fetch(`https://api.github.com/repos/${repoPath}`)
            const data = await res.json()
            project.githubData = {
              stars: data.stargazers_count,
              forks: data.forks_count,
              watchers: data.watchers_count,
              description: data.description,
              homepage: data.homepage
            }
            if (!project.image && data.owner && data.name) {
              project.image = `https://opengraph.githubassets.com/1/${repoPath}`
            }
            // Получаем языки репозитория
            const langRes = await fetch(`https://api.github.com/repos/${repoPath}/languages`)
            const langData = await langRes.json()
            const githubLanguages = Object.keys(langData)
            // Объединяем с technologies, избегая дубликатов
            project.technologies = Array.from(new Set([...(project.technologies || []), ...githubLanguages]))
          }
        }
      } catch (e: any) {
        this.error = e.message || 'Ошибка загрузки данных с GitHub'
      } finally {
        this.loading = false
      }
    },
    setProjects(projects: Project[]) {
      this.projects = projects
    }
  }
}) 