<template>
  <section id="experience" ref="experience" class="experience-section">
    <Title title="Experience" subtitle="Explore Me" />

    <div class="experience-details-container observer-item">
      <div class="experience-info">
        <div class="experience-grid">
          <ExperienceCard
            v-for="(exp, index) in $store.state.exps"
            :key="index"
            :icon="exp.icon"
            :title="exp.title"
            :years="exp.years"
            :description="exp.description"
            class="observer-item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard.vue";
import Title from "@/components/Title.vue";

export default {
  components: {
    ExperienceCard,
    Title,
  },
  mounted() {
    this.observeExperienceSection();
  },
  methods: {
    observeExperienceSection() {
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
.experience-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
}

.experience-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
