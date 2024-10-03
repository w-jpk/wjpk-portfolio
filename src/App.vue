<template>
  <Home />
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

html {
  scroll-behavior: smooth;
}

/* p {
  color: rgb(85, 85, 85);
} */

/* a,
.btn {
  transition: all 300ms ease;
} */
</style>
