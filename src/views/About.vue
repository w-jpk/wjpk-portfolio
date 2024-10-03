<template>
  <section id="about">
    <Title title="About Me" subtitle="Get To Know More" />
    <div class="section-container">
      <div class="pic-container">
        <img
          src="../assets/Experience.jpg"
          alt="Profile Picture"
          class="about-pic" />
      </div>

      <div class="about-details-container">
        <div class="about-containers">
          <Details
            v-for="(detail, index) in details"
            :key="index"
            :icon="detail.icon"
            :title="detail.title"
            :description="detail.description" />
        </div>
        <div class="text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            corporis natus suscipit, aut quia impedit soluta assumenda modi
            laborum laboriosam ut odit accusamus! Porro id, vero provident
            architecto ratione nam! Exercitationem aliquam optio nam totam
            incidunt excepturi? Quaerat perferendis, odit modi nihil aspernatur
            error accusamus nostrum labore pariatur quas provident quibusdam
            corporis iure voluptatibus dicta quo blanditiis a tenetur mollitia?
            Cumque officiis, neque exercitationem, quidem sunt, quisquam
            corporis vel distinctio esse quam cupiditate nostrum ipsa? Molestiae
            ad amet dicta architecto sit natus illum facere. Facere, vero? Culpa
            natus perspiciatis neque! Minima maxime voluptatibus doloribus
            molestiae dicta, veniam accusamus amet, animi, porro nihil ad soluta
            a itaque eligendi. Nobis, nemo velit? Animi quam officia aperiam
            inventore alias sapiente adipisci, ratione unde! Aspernatur
            inventore earum maxime at molestiae pariatur fuga repellat quia eius
            quam aliquid sapiente corporis repudiandae quaerat natus alias amet
            veritatis illo eveniet nihil, in possimus autem animi! Ratione, ea.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import Details from "@/components/Details.vue";
import { details } from "@/components/data/details";

export default {
  components: {
    Title,
    Details,
  },
  data() {
    return {
      details,
    };
  },
};
</script>

<style scoped>
.section-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
}

.pic-container {
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-pic {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 2rem;
  object-fit: cover;
}

.about-details-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-containers {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.text-container {
  text-align: justify;
  font-family: "Poppins", sans-serif;
  color: gray;
  font-weight: 500;
  line-height: 1.6;
}

.details-container p {
  font-weight: 600;
  color: gray;
}

.title {
  font-size: 3rem;
  text-align: center;
}

.icon {
  height: 2rem;
}

.about__text-p1 {
  text-align: center;
  font-weight: 600;
  color: gray;
}

.details-container {
  transition: transform 0.3s ease;
}

.details-container:hover {
  transform: scale(1.05);
}
</style>
