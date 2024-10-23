<template>
  <div class="single-project">
    <button class="back-button" @click="goBack">
      <div class="back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="back-icon">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
        Назад
      </div>
    </button>

    <ProjectHeader :singleProjectHeader="singleProjectHeader" />
    <ProjectGallary :projectImages="projectImages" />
    <ProjectInfo :projectInfo="projectInfo" />
  </div>
</template>

<script>
import NavBar from "@/views/NavBar.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectGallary from "@/components/projects/ProjectGallary.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import { mapState } from "vuex";

export default {
  components: {
    NavBar,
    ProjectHeader,
    ProjectGallary,
    ProjectInfo,
  },
  computed: {
    ...mapState({
      projects: (state) => state.prod_v2,
    }),
    project() {
      const projectId = this.$route.params.id;
      return this.projects.find((project) => project.id === Number(projectId));
    },
    singleProjectHeader() {
      return this.project
        ? {
            singleProjectTitle: this.project.title,
            singleProjectDate: this.project.date,
            singleProjectTag: this.project.tag,
          }
        : {};
    },
    projectImages() {
      return this.project ? this.project.image : [];
    },
    projectInfo() {
      return this.project
        ? {
            clientHeading: "О клиенте",
            companyInfos: [
              { title: "Наименование", details: this.project.clientname },
              {
                title: "Услуги",
                details: this.project.clientservices,
              },
              { title: "Веб-сайт", details: this.project.clientwebsite },
            ],
            technologies: [
              {
                title: "Инструменты и технологии",
                techs: this.project.toolstechnologies
                  .split(", ")
                  .map((tech) => tech.trim()),
              },
            ],
            projectDetailsHeading: "Описание",
            projectDetails: [
              {
                details: this.project.description,
              },
            ],
          }
        : {};
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.single-project {
  width: 70%;
  margin: 1rem auto;
  position: relative;
}

.back-button {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  display: flex;
  align-items: start;
  padding-left: 10px;
  background-color: transparent;
  border: none;
  color: #a5a5a5;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.back {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.back-button:hover {
  background-color: #e0e0e0;
  color: #3e3e3e;
}

.back-icon {
  width: 24px;
  height: 24px;
  margin-right: 2px;
}
</style>
