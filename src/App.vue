<template>
  <ButtonTop />
  <router-view />
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import ButtonTop from "./components/ButtonTop.vue";

export default {
  name: "App",
  components: {
    ButtonTop,
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
  /* height: 96vh; */
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: 96vh;
}

.section-container {
  display: flex;
}

html {
  scroll-behavior: smooth;
}
</style>
