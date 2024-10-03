<template>
  <NavBar />
  <Profile />
  <About />
  <Experience />
  <Projects />
  <Contact />
  <FooterBar />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Profile from "../components/Profile.vue";
import About from "../components/About.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import FooterBar from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Profile,
    About,
    Experience,
    Projects,
    Contact,
    FooterBar,
  },
};
</script>

<style></style>
