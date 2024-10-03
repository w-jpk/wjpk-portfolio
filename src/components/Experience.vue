<template>
  <section id="experience">
    <div class="section__text">
      <p class="about__text-p1">Explore Me</p>
      <h1 class="title">Experience</h1>
    </div>
    <div class="experience-details-container">
      <div class="experience-info" style="justify-content: center">
        <div class="grid">
          <div class="grid-card">
            <i><font-awesome-icon icon="fa-solid fa-code" /></i>
            <span>Frontend Development</span>
            <h3>1 Year</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
              labore nostrum explicabo aperiam vitae.
            </p>
          </div>
          <div class="grid-card">
            <i><font-awesome-icon icon="fa-solid fa-code" /></i>
            <span>Frontend Development</span>
            <h3>1 Year</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
              labore nostrum explicabo aperiam vitae.
            </p>
          </div>
          <div class="grid-card">
            <i><font-awesome-icon icon="fa-solid fa-code" /></i>
            <span>Frontend Development</span>
            <h3>1 Year</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
              labore nostrum explicabo aperiam vitae.
            </p>
          </div>
          <div class="grid-card">
            <i><font-awesome-icon icon="fa-solid fa-code" /></i>
            <span>Frontend Development</span>
            <h3>1 Year</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
              labore nostrum explicabo aperiam vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
#experience {
  position: relative;
}
article {
  display: flex;
  width: 10rem;
  justify-content: space-around;
  gap: 0.5rem;
}

.experience-sub-title {
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.experience-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.experience-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-top: 3rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.grid-card {
  border: 2px solid black;
  border-radius: 3rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: left;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.grid-card:hover {
  transform: scale(1.02);
  background-color: black;
  color: white;
}

.grid-card i {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.grid-card span {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(to right, rgb(0, 157, 255), rgb(255, 0, 255));
  background-clip: text;
  color: transparent;
}

.details__containers p {
  font-weight: 600;
  color: gray;
}

.details__containers img {
  padding-top: 0;
}

.article-container {
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
}

.section__text {
  cursor: default;
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.about__text-p1 {
  cursor: default;
  text-align: center;
  font-weight: 600;
  color: gray;
}

.title {
  font-size: 3rem;
  text-align: center;
}

.article-container img {
  cursor: default;
}

.article-text {
  cursor: default;
}
</style>
