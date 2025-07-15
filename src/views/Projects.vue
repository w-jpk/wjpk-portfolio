<template>
  <section id="projects" ref="projects" class="projects-section py-8 md:py-16 px-4 md:px-20">
    <Title title="Проекты" />
    <div class="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 observer-item mt-8">
      <cardProject v-for="(project, index) in $store.state.prod_v2" :key="index" :project="project"
        class="observer-item" />
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import cardProject from "@/components/cardProject.vue";

export default {
  components: {
    Title,
    cardProject
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
