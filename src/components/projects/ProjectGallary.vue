<template>
  <div class="slider-container">
    <div
      class="slider"
      :style="{ transform: 'translateX(-' + currentSlide * 100 + '%)' }">
      <div
        class="project-item"
        v-for="(projectImage, index) in projectImages"
        :key="projectImage.id"
        :class="{ active: currentSlide === index }">
        <div class="image-container">
          <img
            :src="projectImage.url"
            class="image"
            :alt="projectImage.title" />
        </div>
      </div>
    </div>
    <div class="dots-container">
      <span
        v-for="(projectImage, index) in projectImages"
        :key="projectImage.id"
        class="dot"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectImages"],
  data() {
    return {
      currentSlide: 0,
    };
  },
  mounted() {
    this.startSlider();
  },
  beforeDestroy() {
    clearInterval(this.sliderInterval);
  },
  methods: {
    startSlider() {
      this.sliderInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.projectImages.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  margin-top: 3rem;
}

.slider {
  display: flex;
}

.project-item.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease, visibility 3s;
}

.project-item {
  min-width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 1s 1s;
}

.image-container {
  max-width: 1000px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 100%;
  max-height: 400px;
  border-radius: 1rem;
  cursor: default;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dots-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.dot {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #717171;
}
</style>
