<template>
  <section id="projects">
    <Title title="Projects" subtitle="Browse My Recent" />
    <div class="projects-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project" />
    </div>
    <ScrollArrow :nextSectionId="'contact'" />
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { projects } from "@/components/data/projects";
import ScrollArrow from "@/components/ScrollArrow.vue";

export default {
  components: {
    Title,
    ProjectCard,
    ScrollArrow,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
