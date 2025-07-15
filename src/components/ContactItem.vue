<template>
  <div class="contact-info-container">
    <i :class="['icon', 'contact-icon', iconClass]" aria-hidden="true"></i>
    <p class="about__text-p1">
      <a :href="linkUrl" target="_blank">{{ linkText }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.contact-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
}

.contact-icon {
  font-size: 2.5rem;
  cursor: default;
  transition: color 0.3s ease-in-out;
}

.about__text-p1 {
  font-size: larger;
}

.about__text-p1 a {
  text-decoration: none;
  text-decoration-color: white;
  color: gray;

  &:hover {
    color: gray;
    text-decoration: underline;
    text-underline-offset: 0.8rem;
    text-decoration-color: gray;
  }
}
</style>
