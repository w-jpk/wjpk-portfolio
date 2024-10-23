<template>
  <div class="section__text">
    <h1 class="section__title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
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

.section__title {
  font-size: 3rem;
}
</style>
