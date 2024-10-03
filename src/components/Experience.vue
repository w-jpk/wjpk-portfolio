<template>
  <section id="experience">
    <div class="section__text">
      <p class="about__text-p1">Explore Me</p>
      <h1 class="title">Experience</h1>
    </div>
    <div class="experience-details-container">
      <div class="about-containers" style="justify-content: center">
        <div class="details__containers">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="article-container">
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>HTML</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>CSS</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>JS</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>VUE</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>Name</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>Name</h3>
                <p>Experience</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details__containers">
          <h2 class="experience-sub-title">Backend Development</h2>
          <div class="article-container">
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>SQL</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>Node.js</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>Name</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>Name</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>Name</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
              <img src="../assets/checkmark.png" alt="Checkmark" class="icon" />
              <div class="article-text">
                <h3>Name</h3>
                <p>Experience</p>
              </div>
            </article>
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

.details__containers {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border: gray 0.15rem solid;
  border-radius: 2rem;
  width: 40%;
  height: auto;
  padding: 20px;
  /* overflow: hidden; */
  text-align: center;
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
