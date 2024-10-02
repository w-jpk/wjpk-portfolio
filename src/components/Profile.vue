<template>
  <section id="profile">
    <div class="section__pic-container">
      <img src="../assets/profile.png" alt="W-JPK Profile Picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">W-JPK</h1>
      <p class="section__text__p2">Frontend Developer</p>
      <div class="btn-container">
        <button class="btn btn-color-1" @click="downloadPdf()">
          Download CV
        </button>
      </div>
      <div id="socials-container">
        <a
          href="https://t.me/wjpk_bot"
          target="_blank"
          rel="noopener noreferrer">
          <img class="icon" src="../assets/telegram.png" alt="Telegram Logo" />
        </a>
        <a
          href="https://github.com/w-jpk"
          target="_blank"
          rel="noopener noreferrer">
          <img class="icon" src="../assets/github.png" alt="GitHub Logo" />
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

<style scoped>
section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}

.section__pic-container {
  display: flex;
  height: 500px;
  width: 500px;
  margin: auto 0;
}

.section__text {
  cursor: default;
  align-self: center;
  text-align: center;
  font-family: Poppins, sans-serif;
}

.section__text p {
  font-size: 800;
}

.section__text__p1 {
  text-align: center;
  font-weight: 600;
  color: gray;
}

.section__text__p2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
  color: gray;
}

.title {
  font-size: 3rem;
  text-align: center;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

.icon {
  cursor: pointer;
  height: 2rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
}

.btn-color-1 {
  background-color: white;
  border: rgb(53, 53, 53) 0.1rem solid;
  color: black;
}

.btn-color-1:hover {
  cursor: pointer;
  background: rgb(0, 0, 0);
  border: rgb(255, 255, 255) 0.1rem solid;
  color: white;
}
</style>
