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
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  flex: 1;
  height: 160px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
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
