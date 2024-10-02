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
        <!-- <button class="btn btn-color-1" @click="openPdf()">Open CV</button> -->
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
    <div
      v-if="isVisible"
      ref="scrollArrow"
      class="scroll-down"
      :style="{ opacity: opacityValue, transition: 'opacity 0.5s' }"
      @click="scrollToSection">
      <div class="arrow-circle">
        <span class="arrow-down"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      opacityValue: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    openPdf() {
      const pdfPath = "/cv.pdf";
      window.open(pdfPath, "_blank");
    },
    downloadPdf() {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.setAttribute("download", "cv.pdf");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    handleScroll() {
      const profileBottom =
        document.getElementById("profile").offsetTop +
        document.getElementById("profile").offsetHeight;
      const currentScroll = window.scrollY;

      if (currentScroll < profileBottom - 100) {
        if (!this.isVisible) {
          this.isVisible = true;
          this.$nextTick(() => {
            this.opacityValue = 1;
          });
        }
      } else {
        if (this.isVisible) {
          this.opacityValue = 0;
          setTimeout(() => {
            this.isVisible = false;
          }, 500);
        }
      }
    },
    scrollToSection() {
      const targetSection = document.getElementById("about");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
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
  position: relative;
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

.scroll-down {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.scroll-down.visible {
  opacity: 1;
  transform: translateY(0);
}

.arrow-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: gray 0.15rem solid;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.arrow-down {
  display: block;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid black;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
