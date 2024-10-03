<template>
  <NavBar />
  <Profile />
  <About />
  <Experience />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Profile from "../components/Profile.vue";
import About from "../components/About.vue";
import Experience from "../components/Experience.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Profile,
    About,
    Experience,
  },
};
</script>

<style></style>
