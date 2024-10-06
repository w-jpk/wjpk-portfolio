<template>
  <div>
    <!-- Кнопка "Back to Top" -->
    <button v-if="isVisible" @click="scrollToTop" class="back-to-top">
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    visibleoffset: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    rightOffset() {
      return this.right;
    },
    bottomOffset() {
      return this.bottom;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    checkScroll() {
      this.isVisible = window.scrollY > this.visibleoffset;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
