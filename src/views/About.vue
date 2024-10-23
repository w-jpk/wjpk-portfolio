<template>
  <section id="about" ref="about" class="about-section">
    <Title title="Обо мне" />

    <div class="section-container">
      <div class="pic-container observer-item">
        <img
          src="../assets/Experience.jpg"
          alt="Profile Picture"
          class="about-pic" />
      </div>

      <div class="about-details-container observer-item">
        <div class="about-containers">
          <Details
            v-for="(detail, index) in $store.state.details"
            :key="index"
            :icon="detail.icon"
            :title="detail.title"
            :description="detail.description"
            class="observer-item" />
        </div>

        <div class="text-container observer-item">
          <p>
            Ответственный и мотивированный начинающий разработчик, стремящийся
            развиваться в области Front-End разработки. Интересуюсь современными
            веб-технологиями и готов к решению новых задач.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import Details from "@/components/Details.vue";

export default {
  components: {
    Title,
    Details,
  },
  mounted() {
    this.observeSections();
  },
  methods: {
    observeSections() {
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
.section-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
}

.pic-container {
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-pic {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 2rem;
  object-fit: cover;
}

.about-details-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-containers {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.text-container {
  text-align: justify;
  font-family: "Poppins", sans-serif;
  color: gray;
  font-weight: 500;
  line-height: 1.6;
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
