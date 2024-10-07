<template>
  <ButtonTop />
  <router-view />
</template>

<script>
import NavBar from "@/views/NavBar.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import ButtonTop from "./components/ButtonTop.vue";
import { auth } from "./admin/data/firebaseConfig";

export default {
  name: "App",
  components: {
    NavBar,
    ButtonTop,
  },
  created() {
    // Проверка состояния аутентификации
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("setUser", user); // Установка пользователя в store
      } else {
        this.$store.dispatch("setUser", null); // Если нет авторизованного пользователя
      }
    });
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
</style>
