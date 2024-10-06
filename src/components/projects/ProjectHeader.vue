<template>
  <div>
    <!-- Заголовок проекта и мета-информация -->
    <p class="project-title">
      {{ singleProjectHeader.singleProjectTitle }}
    </p>
    <div class="meta-info">
      <div class="meta-item">
        <i><font-awesome-icon :icon="['far', 'clock']" /></i>
        <span class="meta-text">
          {{ singleProjectHeader.singleProjectDate }}
        </span>
      </div>
      <div class="meta-item">
        <i><font-awesome-icon :icon="['fas', 'tag']" /></i>
        <span class="meta-text">
          {{ singleProjectHeader.singleProjectTag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["singleProjectHeader"],
};
</script>

<style scoped>
span,
p {
  cursor: default;
}
.project-title {
  font-weight: bold;
  text-align: left;
  font-size: 1.875rem;
  margin-top: 3.5rem;
  margin-bottom: 1.75rem;
  color: #1a202c;
}

@media (min-width: 640px) {
  .project-title {
    font-size: 2.25rem;
    margin-top: 5rem;
  }
}

.meta-info {
  display: flex;
}

.meta-item {
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
}

.meta-item:last-child {
  margin-right: 0;
}

.icon {
  width: 1rem;
  height: 1rem;
  color: #4a5568;
}

.meta-text {
  margin-left: 0.5rem;
  line-height: 1;
  color: #1a202c;
}
</style>
