<template>
  <div class="grid-card">
    <div class="grid-card-info">
      <i>
        <font-awesome-icon :icon="icon" />
      </i>
      <span>{{ title }}</span>
    </div>
    <h3>{{ years }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    icon: {
      type: Array,
      required: true,
      default: () => ["fas", "code"],
    },
    title: {
      type: String,
      required: true,
      default: "Frontend Development",
    },
    years: {
      type: String,
      required: true,
      default: "1 Year",
    },
    description: {
      type: String,
      required: true,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis labore nostrum explicabo aperiam vitae.",
    },
  },
};
</script>

<style scoped>
.grid-card {
  border: 2px solid black;
  border-radius: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: left;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.grid-card-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.grid-card-info:hover {
  color: white;
}

.grid-card:hover {
  transform: scale(1.02);
  background-color: black;
  color: white;
}

.grid-card i {
  font-size: 1.5rem;
}

.grid-card span {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(to right, rgb(0, 157, 255), rgb(255, 0, 255));
  background-clip: text;
  color: transparent;
}

.grid-card p {
  margin-top: 0.5rem;
  text-align: justify;
}
</style>
