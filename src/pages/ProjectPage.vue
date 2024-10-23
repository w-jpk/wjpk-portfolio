<template>
  <NavBar />
  <div class="single-project">
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
      projects: (state) => state.prod_v2, // Используем state.prod_v2
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
            clientHeading: "About Client",
            companyInfos: [
              { id: 1, title: "Name", details: this.project.clientname },
              {
                id: 2,
                title: "Services",
                details: this.project.clientservices,
              },
              { id: 3, title: "Website", details: this.project.clientwebsite },
            ],
            objectivesHeading: "Objective",
            objectivesDetails: this.project.description,
            technologies: [
              {
                title: "Tools & Technologies",
                techs: this.project.toolstechnologies
                  .split(", ")
                  .map((tech) => tech.trim()),
              },
            ],
          }
        : {};
    },
  },
};
</script>

<style scoped>
.single-project {
  width: 70%;
  margin: 2.5rem auto;
}
</style>
