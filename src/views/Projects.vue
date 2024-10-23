<template>
  <section id="projects" ref="projects" class="projects-section">
    <Title title="Проекты" />

    <div class="projects-grid observer-item">
      <ProjectCard
        v-for="(project, index) in $store.state.prod_v2"
        :key="index"
        :project="project"
        class="observer-item" />
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: {
    Title,
    ProjectCard,
  },
  mounted() {
    this.observeProjectsSection();
  },
  methods: {
    observeProjectsSection() {
      const options = {
        root: null,
        threshold: 0.1,
      };
      const observer = new IntersectionObserver(this.handleIntersect, options);

      const items = this.$el.querySelectorAll(".observer-item");

      items.forEach((item) => observer.observe(item));
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else {
          entry.target.classList.add("fade-out");
          entry.target.classList.remove("fade-in");
        }
      });
    },
  },
};
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.observer-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.fade-out {
  opacity: 0;
  transform: translateY(20px);
}
</style>
