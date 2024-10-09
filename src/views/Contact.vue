<template>
  <section id="contact">
    <Title title="Contact Me" subtitle="Get in Touch" />
    <div class="contact-items">
      <Feedback />
      <div class="contact-info-upper-container">
        <ContactItem
          iconClass="fas fa-envelope"
          linkText="gizbrekht.y@bk.ru"
          linkUrl="mailto:gizbrekht.y@bk.ru" />
        <ContactItem
          iconClass="fab fa-github"
          linkText="GitHub"
          linkUrl="https://www.github.com/w-jpk" />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import ContactItem from "@/components/ContactItem.vue";
import Feedback from "@/components/feedback.vue";

export default {
  components: {
    Title,
    ContactItem,
    Feedback,
  },
};
</script>

<style scoped>
#contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
}

.contact-items {
  display: flex;
  flex-direction: column;
}

.contact-info-upper-container {
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: rgb(250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;
}
</style>
