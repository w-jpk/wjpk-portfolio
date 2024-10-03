<template>
  <section id="projects">
    <div class="section__text">
      <p class="about__text-p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
    </div>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="../assets/project-1.png"
              alt="Project 1"
              class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">Project One</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-1 project-btn"
              onclick="location.href='https://github.com/'">
              Github
            </button>
            <button
              class="btn btn-color-3 project-btn"
              onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="../assets/project-2.png"
              alt="Project 2"
              class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">Project Two</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-1 project-btn"
              onclick="location.href='https://github.com/'">
              Github
            </button>
            <button
              class="btn btn-color-3 project-btn"
              onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="../assets/project-3.png"
              alt="Project 3"
              class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">Project Three</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-1 project-btn"
              onclick="location.href='https://github.com/'">
              Github
            </button>
            <button
              class="btn btn-color-3 project-btn"
              onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
.color-container {
  border-color: rgb(163, 163, 163);
  background: rgb(250, 250, 250);
}

.project-img {
  border-radius: 2rem;
  width: 90%;
  height: 90%;
}

.project-title {
  margin: 1rem;
  color: black;
}

.project-btn {
  cursor: pointer;
  color: black;
  border-color: rgb(163, 163, 163);
  background: none;
}

.btn-color-3 {
  cursor: pointer;
  background: rgb(0, 0, 0);
  border: rgb(255, 255, 255) 0.1rem solid;
  color: white;
}
</style>
