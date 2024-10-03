<template>
  <div class="section__text">
    <p class="section__subtitle">{{ subtitle }}</p>
    <h1 class="section__title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      required: true,
      default: "Subtitle",
    },
    title: {
      type: String,
      required: true,
      default: "Title",
    },
  },
};
</script>

<style scoped>
.section__text {
  cursor: default;
  text-align: center;
  margin-bottom: 2rem;
}

.section__subtitle {
  font-weight: 600;
  color: gray;
}

.section__title {
  font-size: 3rem;
}
</style>
