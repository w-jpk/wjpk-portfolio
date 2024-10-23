<template>
  <div class="project-card">
    <div @click="handleHover($event, project.id)">
      <img :src="project.image[0].url" :alt="project.title" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
    <div class="btn-group">
      <a :href="project.liveDemoLink" class="btn" target="_blank">Demo</a>
      <a :href="project.githubLink" class="btn" target="_blank">Github</a>
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
    handleHover(event, id) {
      event.currentTarget.classList.toggle("hover");
      this.$router.push({ path: `/project/${id}` });
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
  height: 100%;
  max-height: auto;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.btn-group {
  display: flex;
  gap: 1rem;
  margin-top: 5rem;
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
