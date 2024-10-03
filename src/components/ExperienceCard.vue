<template>
  <div class="grid-card">
    <i>
      <font-awesome-icon :icon="icon" />
    </i>
    <span>{{ title }}</span>
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

<style>
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
</style>
