<template>
  <section id="contact">
    <div class="section__text">
      <p class="about__text-p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
    </div>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <img
          src="../assets/email.png"
          alt="Email icon"
          class="icon contact-icon email-icon" />
        <p><a href="mailto:gizbrekht.y@bk.ru">gizbrekht.y@bk.ru</a></p>
      </div>
      <div class="contact-info-container">
        <img
          src="../assets/github.png"
          alt="Github icon"
          class="icon contact-icon" />
        <p><a href="https://www.github.com">GitHub</a></p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
#contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
}

.contact-info-upper-container {
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: (250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;
}

.contact-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
}

.contact-info-container p {
  font-size: larger;
}

.contact-icon {
  cursor: default;
}

.email-icon {
  height: 2.5rem;
}
</style>
