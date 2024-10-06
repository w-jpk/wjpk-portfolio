<template>
  <div class="single-project">
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />
    <ProjectGallery :projectImages="projectImages" />
    <ProjectInfo :projectInfo="projectInfo" />
  </div>
</template>

<script>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectGallery from "@/components/projects/ProjectGallary.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";

export default {
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data() {
    return {
      singleProjectHeader: {
        singleProjectTitle: "Project Management UI",
        singleProjectDate: "Jul 26, 2021",
        singleProjectTag: "UI / Frontend",
      },
      projectImages: [
        {
          id: 1,
          title: "Kabul Project Management UI",
          img: require("@/assets/project-1.png"),
        },
        {
          id: 2,
          title: "Kabul Project Management UI",
          img: require("@/assets/project-2.png"),
        },
        {
          id: 3,
          title: "Kabul Project Management UI",
          img: require("@/assets/project-3.png"),
        },
      ],
      projectInfo: {
        clientHeading: "About Client",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: 2,
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: 3,
            title: "Website",
            details: "https://company.com",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        technologies: [
          {
            title: "Tools & Technologies",
            techs: ["HTML", "CSS", "JavaScript", "Vue.js"],
          },
        ],
        projectDetailsHeading: "Challenge",
        projectDetails: [
          {
            id: 1,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.single-project {
  width: 70%;
  margin: 2.5rem auto;
}
</style>
