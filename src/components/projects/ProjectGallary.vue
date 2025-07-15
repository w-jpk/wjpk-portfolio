<template>
  <div class="slider-container" @mouseenter="stopSlider" @mouseleave="startSlider">
    <div class="slider"
      :style="{ transform: 'translateX(-' + currentSlide * 100 + '%)', transition: 'transform 0.5s ease' }">
      <div class="project-item" v-for="(projectImage, index) in projectImages" :key="projectImage.id"
        :class="{ active: currentSlide === index }">
        <div class="image-container">
          <img :src="projectImage.url" class="image" :alt="projectImage.title" loading="lazy" />
        </div>
      </div>
    </div>
    <div class="dots-container">
      <span v-for="(projectImage, index) in projectImages" :key="projectImage.id" class="dot"
        :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectImages"],
  data() {
    return {
      currentSlide: 0,
      sliderInterval: null,
    };
  },
  mounted() {
    this.startSlider();
  },
  beforeDestroy() {
    this.stopSlider();
  },
  methods: {
    startSlider() {
      if (this.sliderInterval) return;
      this.sliderInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopSlider() {
      clearInterval(this.sliderInterval);
      this.sliderInterval = null;
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
  transition: transform 0.5s ease;
}

.project-item {
  min-width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s;
}

.project-item.active {
  opacity: 1;
  visibility: visible;
}

.image-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 1075px;
  max-height: 500px;
  border-radius: 1rem;
  cursor: default;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: contain;
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