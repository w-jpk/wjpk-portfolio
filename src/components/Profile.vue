<template>
  <section id="profile">
    <div class="section__pic-container">
      <img src="../assets/profile.jpg" alt="W-JPK Profile Picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">W-JPK</h1>
      <p class="section__text__p2">Frontend Developer</p>
      <div class="btn-container">
        <button class="btn btn-color-2" @click="downloadPdf()">
          Download CV
        </button>
      </div>
      <div id="socials-container">
        <a
          href="https://t.me/wjpk_bot"
          target="_blank"
          rel="noopener noreferrer">
          <img src="../assets/telegram.png" alt="Telegram Logo" />
        </a>
        <a
          href="https://github.com/w-jpk"
          target="_blank"
          rel="noopener noreferrer">
          <img src="../assets/github.png" alt="GitHub Logo" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    downloadPdf() {
      const link = document.createElement("a");
      link.href = "../assets/cv.pdf";
      link.setAttribute("download", "cv.pdf");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style></style>
