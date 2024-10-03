<template>
  <div class="btn-container">
    <button class="btn btn--primary" @click="downloadPdf">{{ name }}</button>
  </div>
</template>

<script>
export default {
  props: {
    downloadPdf: {
      type: Function,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  font-weight: 600;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
  transition: background-color 300ms ease, color 300ms ease;
}

.btn--primary {
  background-color: white;
  border: 0.1rem solid #353535;
  color: black;
}

.btn--primary:hover {
  cursor: pointer;
  background-color: black;
  color: white;
  border-color: white;
}
</style>
