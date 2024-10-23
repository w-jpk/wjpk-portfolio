<template>
  <div class="container">
    <div class="left-section">
      <div class="section-item">
        <p class="section-title">{{ projectInfo.clientHeading }}</p>
        <ul class="company-info">
          <li
            v-for="info in projectInfo.companyInfos"
            :key="info"
            class="company-info-item">
            <span>{{ info.title }}: </span>
            <a
              v-if="isValidUrl(info.details)"
              :href="info.details"
              target="_blank"
              :class="[
                'link',
                info.title === 'Website' ? 'highlight-link' : '',
              ]"
              aria-label="Project Website">
              {{ info.details }}
            </a>
            <span v-else>{{ info.details }}</span>
          </li>
        </ul>
      </div>

      <div class="section-item">
        <p class="section-title">{{ projectInfo.technologies[0].title }}</p>
        <p class="section-text">
          {{ projectInfo.technologies[0].techs.join(", ") }}
        </p>
      </div>
    </div>

    <div class="right-section">
      <p class="section-title-bold">{{ projectInfo.projectDetailsHeading }}</p>
      <p
        v-for="projectDetail in projectInfo.projectDetails"
        :key="projectDetail.id"
        class="project-detail-text">
        {{ projectDetail.details }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectInfo"],
  methods: {
    isValidUrl(url) {
      const regex = /^(http|https):\/\/[^ "]+$/;
      return regex.test(url);
    },
  },
};
</script>

<style scoped>
.container {
  display: block;
  margin-top: 3.5rem;
  cursor: default;
}

a {
  text-decoration: none;
}

@media (min-width: 640px) {
  .container {
    display: flex;
    gap: 2.5rem;
  }
}

.left-section,
.right-section {
  width: 100%;
  text-align: left;
}

.left-section {
  width: 100%;
}

@media (min-width: 640px) {
  .left-section {
    width: 33.3333%;
  }

  .right-section {
    width: 66.6667%;
  }
}

.right-section {
  margin-top: 2.5rem;
}

@media (min-width: 640px) {
  .right-section {
    margin-top: 0;
  }
}

.section-item {
  margin-bottom: 1.75rem;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.section-text {
  color: #1a202c;
}

.section-title-bold {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.75rem;
  color: #1a202c;
}

.company-info {
  line-height: 1.5;
  list-style: none;
}

.company-info-item {
  color: #2d3748;
}

.link {
  color: inherit;
}

.highlight-link {
  cursor: pointer;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.social-icon {
  background-color: #edf2f7;
  color: #718096;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: color 0.5s;
}

.social-icon:hover {
  color: #2d3748;
}

.icon {
  width: 1rem;
  height: 1rem;
}
</style>
