<template>
  <Profile />
  <About />
  <Experience />
  <Projects />
  <Contact />
  <FooterBar />
</template>

<script>
import Profile from "../views/Profile.vue";
import About from "../views/About.vue";
import Experience from "../views/Experience.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import FooterBar from "../views/Footer.vue";

export default {
  name: "Home",
  components: {
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
