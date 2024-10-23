<template>
  <div class="container">
    <div
      class="project-item"
      v-for="projectImage in projectImages"
      :key="projectImage.id">
      <img :src="projectImage.url" class="image" :alt="projectImage.title" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectImages"],
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3rem;
  gap: 0;
}

@media (min-width: 640px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

.project-item {
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) {
  .project-item {
    margin-bottom: 0;
  }
}

.image {
  height: 100%;
  width: 100%;
  max-width: 500px;
  max-height: 250px;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
  .image {
    box-shadow: none;
  }
}
</style>
