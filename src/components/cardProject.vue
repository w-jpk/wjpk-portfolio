<template>
  <div class="profile">
    <div class="profile__wrapper">
      <img :src="project.image[0].url" :alt="project.title" class="background-img" />
      <div class="profile__overlay"></div>
      <div class="profile__content">
        <h2>
          {{ project.title }}
          <img v-if="project.verifiedBadgeUrl" :src="project.verifiedBadgeUrl" alt="Verified Badge" class="verified" />
        </h2>
        <p class="description">
          {{ project.description }}
        </p>
        <div class="highlights">
          <div class="highlight">
            <div class="highlight__value">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
              {{ reviewValue }}
            </div>
            <div class="highlight__name">Review</div>
          </div>
          <div class="highlight">
            <div class="highlight__value">{{ revenueValue }}</div>
            <div class="highlight__name">Revenue</div>
          </div>
          <div class="highlight">
            <div class="highlight__value">{{ rateValue }}</div>
            <div class="highlight__name">Rate</div>
          </div>
        </div>
        <div class="button-actions">
          <a class="primary" :href="project.githubLink" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
            View
          </a>
          <!-- <button class="profile__bookmark" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bookmark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" /></svg>
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      githubData: null,
      githubError: false,
    };
  },
  mounted() {
    if (this.project.githubLink) {
      // Получаем owner/repo из ссылки
      const match = this.project.githubLink.match(/github.com\/(.+?)\/(.+?)(?:$|\/|\?)/);
      if (match) {
        const owner = match[1];
        const repo = match[2];
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
          .then(res => res.ok ? res.json() : Promise.reject(res))
          .then(data => { this.githubData = data; })
          .catch(() => { this.githubError = true; });
      } else {
        this.githubError = true;
      }
    }
  },
  computed: {
    reviewValue() {
      if (this.githubData) return this.githubData.stargazers_count;
      if (this.githubError) return 'N/A';
      return '';
    },
    revenueValue() {
      if (this.githubData) return this.githubData.forks_count;
      if (this.githubError) return 'N/A';
      return '';
    },
    rateValue() {
      if (this.githubData) return this.githubData.subscribers_count;
      if (this.githubError) return 'N/A';
      return '';
    },
  },
};
</script>

<style scoped>
:root {
  --primary: #060606;
  --primary-light: #a29bfe;
  --primary-dark: #4834d4;
  --gold: #da9347;
  --white: #fff;
  --background: #F8F8FF;
  --text: #fff;
  --profile-headline: #fff;
  --profile-text: #fff;
  --primary-bg: #ffffff;
  --primary-text: #fff;
  --bookmark-bg: #2d3638;
  --bookmark-border: #797979;
  --bookmark-svg: #fff;
  --highlight-name-color: #fff;
  --highlight-value-color: #fff;
}
.profile {
  padding: 1rem;
  position: relative;
  max-width: 30rem;
  width: 100%;
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;
  height: 32rem;
  border-radius: 2.5rem;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
}
.profile__wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
}
.background-img {
  position: absolute;
  z-index: 1;
  top: 0rem;
  left: 0rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 1.75rem;
  filter: brightness(0.7);
}
.profile__overlay {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%);
  border-radius: 1.75rem;
}
.profile__content {
  position: relative;
  z-index: 3;
  margin-top: auto;
  color: #fff !important;
  border-radius: 0 0 2rem 2rem;
  padding: 2rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.verified {
  max-width: 1.5rem;
  max-height: 1.5rem;
}
.profile h2,
.profile__content h2,
.profile__content p,
.profile__content .highlight__value,
.profile__content .highlight__name,
.profile__content .button-actions button,
.profile__content .button-actions .primary {
  color: #fff !important;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.profile h2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  gap: 0.5rem;
}
.profile p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.highlights {
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
}
.highlight {
  display: flex;
  flex-direction: column;
  margin: 0 auto; 
  text-align: center;
  gap: 0.25rem;
}
.highlight__value {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.highlight__value svg {
  width: 1.2rem;
  height: 1.2rem;
  fill: #fff !important;
}
.highlight__name {
  font-size: 1rem;
  font-weight: 700;
}
.button-actions {
  width: 100%;
  gap: 0.75rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
.button-actions .primary {
  display: block;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #fff;
  outline: none;
  background: rgba(255,255,255,0.12);
  color: #fff !important;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 0.7rem 1.7rem;
  border-radius: 1.2rem;
  min-height: 2.3rem;
  box-shadow: none;
  transition: background 0.18s, border-color 0.18s, color 0.18s, transform 0.13s;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.01em;
  margin: 0;
}
.button-actions .primary:hover, .button-actions .primary:focus {
  background: rgba(255,255,255,0.22);
  border-color: #fff;
  color: #fff !important;
  transform: translateY(-1px) scale(1.03);
}
.button-actions button {
  background: rgba(255,255,255,0.15);
  color: #fff !important;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.button-actions .primary svg {
  margin-right: 0.6rem;
  stroke: #fff !important;
  vertical-align: middle;
}
.button-actions .primary svg {
  margin-right: 0.6rem;
  stroke: #fff !important;
}
.button-actions .profile__bookmark {
  background: var(--bookmark-bg);
  border: 1px solid var(--bookmark-border);
  color: #fff !important;
  flex: 1;
  transition: all 0.2s ease-in-out;
}
.button-actions .profile__bookmark:hover {
  border: 1px solid var(--bookmark-svg);
}
.button-actions .profile__bookmark svg {
  stroke: #fff !important;
  fill: #fff !important;
}
@media (max-width: 600px) {
  .profile {
    max-width: 100vw;
    height: 24rem;
    border-radius: 1.2rem;
  }
  .profile__content {
    padding: 1.2rem 0.5rem 1rem 0.5rem;
  }
  .profile h2 {
    font-size: 1.1rem;
  }
  .highlight__value {
    font-size: 1rem;
  }
  .highlight__name {
    font-size: 0.85rem;
  }
  .button-actions .primary, .button-actions button {
    font-size: 0.9rem;
    min-height: 2rem;
  }
}
</style>
