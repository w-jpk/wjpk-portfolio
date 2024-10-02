<template>
  <NavBar />
  <Profile />
  <About />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Profile from "../components/Profile.vue";
import About from "../components/About.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Profile,
    About,
  },
};
</script>

<style></style>
