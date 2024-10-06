<template>
  <div class="project-card">
    <div @click="handleHover">
      <img :src="project.image" :alt="project.title" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
    <div class="btn-group">
      <a :href="project.liveDemoLink" class="btn" target="_blank">Live Demo</a>
      <a :href="project.githubLink" class="btn" target="_blank">Github Repo</a>
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
  methods: {
    handleHover(event) {
      event.currentTarget.classList.toggle("hover");
      this.$router.push({ path: `/project` });
    },
  },
};
</script>

<style scoped>
.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  border: 2px solid black;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, all 0.3s linear;
  background-color: #f8f8f8;
}

.project-card:hover {
  background-color: black;
  color: white;
  transform: translateY(-10px);
}

.project-card img {
  width: 100%;
  max-width: 250px;
  border-radius: 1rem;
}

.btn-group {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 1rem;
  text-decoration: none;
  color: white;
  background-color: black;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.project-card:hover .btn {
  border: 2px solid white;
}

.btn:hover {
  background-color: white;
  color: black;
}
</style>
