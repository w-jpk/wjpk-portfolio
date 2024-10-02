<template>
  <section id="about">
    <div class="section__text">
      <p class="about__text-p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
    </div>
    <div class="section-container">
      <div class="pic-container">
        <img
          src="../assets/Experience.jpg"
          alt="Profile Picture"
          class="about-pic" />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src="../assets/experience.png"
              alt="Experience Icon"
              class="icon" />
            <h3>Experience</h3>
            <p>
              1 year <br />
              Slujbi Arm RUSSIA MOTHER BLYAT NAXYI <br />
              РОССИЯ РОССИЯ РОССИЯ
            </p>
          </div>
          <div class="details-container">
            <img
              src="../assets/education.png"
              alt="Education Icon"
              class="icon" />
            <h3>Education</h3>
            <p>21 years of education on the street</p>
          </div>
          <!-- <div class="details-container">
            <img
              src="../assets/experience.png"
              alt="Experience Icon"
              class="icon" />
            <h3>РУССКАЯ ДУША</h3>
            <p>
              Бескрайняя тайга окутала меня <br />
              И русская душа поёт, любя (Поёт, любя) <br />
              А где-то за бугром, там полная хуйня (Там полная хуйня) <br />
              Россия, зажигай, страна моя (Страна моя) <br />
            </p>
            <p>
              «Россия!» — слышу с каждого двора <br />
              Я закончил девять классов, но я умный дохуя <br />
              Эй, Россия! С нами Бог, с нами Москва <br />
              С нами бабки, с нами детки, с нами русская душа (A-A-A!) <br />
              Я не пью и не курю, я разрываю барьер <br />
              Я не пью и не курю, я подаю вам пример <br />
              Я не пью и не курю, но она делает это <br />
              Если она будет со мной, она не будет делать это (Бескрайняя тайга)
              <br />
            </p>
            <p>
              Где-то за бугром, там же полная хуйня <br />
              Зачем Навальный говорил, что нам нужно в США? <br />
              Кремль нам не выдал грант, мы не просили нихуя <br />
              В отличии от вас, наша жопа стоит дохуя <br />
            </p>
            <p>
              Да, я русский со мной Бог <br />
              Да, я люблю русских жён <br />
              Да, я взъебу батальон <br />
              BAZA, скажи BAZA, BAZA <br />
              Да, я русский со мной Бог <br />
              Да, я люблю русских жён <br />
              Да, я взъебу батальон <br />
              BAZA, скажи BAZA, BAZA, BAZA <br />
            </p>
            <p>
              А, мы патриоты не шаманы, научили молодежь кричать «Америка —
              параша» <br />
              Нету ничьих взглядов лучше, лучше только наши <br />
              Если кто-то не согласен, крикну «BAZA», вам в ебало (Бескрайняя
              тайга) <br />
              Тайга, тайга, тайга, бегу по лесу, в руках балалайка <br />
              Я Иван дурачок, ведь моя жизнь — сказка <br />
              Да я русский, что ебал бабайку <br />
              Лайкай, лайкай, лайкай <br />
              Все мои записи ВКонтакте <br />
              У слова слон корень славянский <br />
              Я слоняра — нихуя се <br />
            </p>
            <p>
              Бескрайняя тайга окутала меня <br />
              И русская душа поёт, любя (Поёт, любя) <br />
              Бескрайняя тайга окутала меня <br />
              И русская душа поёт, любя (Поёт, любя) <br />
              А где-то за бугром, там полная хуйня (Там полная хуйня) <br />
              Россия, зажигай, страна моя (Страна моя) <br />
            </p>
          </div> -->
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

<script></script>

<style scoped>
section {
  padding-top: 10vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

#about {
  position: relative;
}

.section-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
}

.pic-container {
  margin-left: 150px;
}

.pic-container,
.pic-container img {
  display: flex;
  height: 500px;
  width: 400px;
}

.about-pic {
  padding: 0;
  border-radius: 2rem;
}

.section__text {
  cursor: default;
  align-self: center;
  text-align: center;
}

.details-container p {
  font-weight: 600;
  color: gray;
}

.section__text p {
  font-weight: 600;
}

.about__text-p1 {
  text-align: center;
  font-weight: 600;
  color: gray;
}

.title {
  font-size: 3rem;
  text-align: center;
}

.icon {
  cursor: pointer;
  height: 2rem;
}

.about-containers {
  display: flex;
  /* justify-content: start; */
  /* align-items: center; */
  gap: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-family: Poppins, sans-serif;
}

.details-container {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border: gray 0.15rem solid;
  border-radius: 2rem;
  width: 350px;
  height: 150px;
  padding: 20px;
  overflow: hidden;
  text-align: center;
}

.details-container p,
img {
  padding-top: 1rem;
}

.text-container {
  padding-top: 2rem;
  text-align: justify;
  flex-wrap: wrap;
  margin-right: 150px;
  font-family: Poppins, sans-serif;
  color: gray;
  font-weight: 500;
}

.about-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.about-details-container,
.about-details-container img {
  cursor: default;
}
</style>
