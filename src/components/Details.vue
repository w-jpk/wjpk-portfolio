<template>
  <div class="details-container">
    <font-awesome-icon :icon="icon" class="icon" />
    <h3 class="details_title">{{ title }}</h3>
    <p class="details__subtitle" v-html="description"></p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  flex: 1;
  height: 160px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  z-index: 1;
}

.details-container::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(to right, rgb(0, 157, 255), rgb(255, 0, 255), rgb(0, 157, 255));
  background-size: 300%;
  border-radius: 2rem;
  z-index: -2;
  animation: borderAnimation 3s linear infinite;
}

.details-container::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: rgb(255, 255, 255);
  border-radius: 2rem;
  z-index: -1;
}

@keyframes borderAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.details-container:hover {
  transform: scale(1.05);
}


.icon {
  height: 2rem;
  margin-bottom: 1rem;
}

.details__subtitle {
  margin-top: 0.5rem;
  font-weight: 600;
  color: gray;
}

.details_title {
  font-size: 1.5rem;
  background: linear-gradient(to right, rgb(0, 157, 255), rgb(255, 0, 255));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
