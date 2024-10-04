<template>
  <section id="experience">
    <Title title="Experience" subtitle="Explore Me" />
    <div class="experience-details-container">
      <div class="experience-info">
        <div class="experience-grid">
          <ExperienceCard
            v-for="exp in exps"
            :key="exp.id"
            :icon="exp.icon"
            :title="exp.title"
            :years="exp.years"
            :description="exp.description" />
        </div>
      </div>
    </div>
    <ScrollArrow :nextSectionId="'projects'" />
  </section>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard.vue";
import { exps } from "@/components/data/data";
import Title from "@/components/Title.vue";
import ScrollArrow from "@/components/ScrollArrow.vue";

export default {
  components: {
    ExperienceCard,
    Title,
    ScrollArrow,
  },
  data() {
    return {
      exps,
    };
  },
};
</script>

<style scoped>
#experience {
  position: relative;
}

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
</style>
