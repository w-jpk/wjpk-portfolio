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
/* Удалены глобальные стили, используйте Tailwind классы */
</style>
