<template>
  <section id="profile" ref="profile">
    <div class="profile__pic-container">
      <img
        src="../assets/profile.png"
        alt="W-JPK Profile Picture"
        class="profile__pic" />
    </div>
    <div class="profile__text">
      <p class="profile__subtitle">Hello, I'm</p>
      <h1 class="profile__title">W-JPK</h1>
      <p class="profile__role">Frontend Developer</p>
      <Btn :downloadPdf="downloadPdf" name="Download CV" />
      <div class="socials-container">
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
import Btn from "@/components/Btn.vue";
export default {
  components: {
    Btn,
  },
  methods: {
    downloadPdf() {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
#profile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  height: 80vh;
  position: relative;
}

.profile__pic-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
}

.profile__pic {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}

.profile__text {
  text-align: center;
  font-family: Poppins, sans-serif;
}

.profile__subtitle {
  font-weight: 600;
  color: gray;
}

.profile__title {
  font-size: 3rem;
}

.profile__role {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(to right, rgb(0, 157, 255), rgb(255, 0, 255));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  font-weight: 600;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
  transition: background-color 300ms ease, color 300ms ease;
}

.btn--primary {
  background-color: white;
  border: 0.1rem solid #353535;
  color: black;
}

.btn--primary:hover {
  cursor: pointer;
  background-color: black;
  color: white;
  border-color: white;
}

.socials-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.icon {
  cursor: pointer;
  height: 2rem;
  transition: transform 200ms ease;
}

.icon:hover {
  transform: scale(1.1);
}
</style>
