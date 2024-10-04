<template>
  <div
    class="scroll-arrow"
    :class="{ 'scroll-arrow--hidden': !isVisible }"
    @click="scrollToNextSection"></div>
</template>

<script>
export default {
  name: "ScrollArrow",
  props: {
    nextSectionId: {
      type: String,
      required: true,
    },
    targetSection: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isVisible: true,
      observer: null,
    };
  },
  mounted() {
    if (this.targetSection) {
      this.observeParentSection();
    } else {
      this.observeCurrentSection();
    }
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    scrollToNextSection() {
      const nextSection = document.querySelector(`#${this.nextSectionId}`);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    observeParentSection() {
      this.observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          this.isVisible = entry.isIntersecting;
        },
        {
          root: null,
          threshold: 0.1,
        }
      );
      this.observer.observe(this.targetSection);
    },
    observeCurrentSection() {
      this.observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          this.isVisible = entry.isIntersecting;
        },
        {
          root: null,
          threshold: 0.1,
        }
      );
      this.observer.observe(this.$el.parentNode);
    },
  },
};
</script>

<style scoped>
.scroll-arrow {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 1;
  z-index: 100;
  animation: bounce 2s infinite;
}

.scroll-arrow::before {
  content: "";
  width: 12px;
  height: 12px;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  transform: rotate(45deg);
}

.scroll-arrow--hidden {
  opacity: 0;
  pointer-events: none;
}

.scroll-arrow:hover {
  transform: translateX(-50%) translateY(-5px);
}

.scroll-arrow:active {
  transform: translateX(-50%) translateY(0);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>

