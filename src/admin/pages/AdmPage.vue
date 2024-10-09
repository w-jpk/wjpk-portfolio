<template>
  <div v-if="isAuthenticated" class="admin-page">
    <h1 style="margin: 0 0 1rem 0">Добавление проекта</h1>
    <form @submit.prevent="addProject">
      <div class="form-group">
        <label for="projectName">Название проекта</label>
        <input type="text" id="projectName" v-model="projectName" required />
      </div>
      <div class="form-group">
        <label for="projectDescription">Описание проекта</label>
        <input
          id="projectDescription"
          v-model="projectDescription"
          required></input>
      </div>
      <div class="form-group">
        <label for="projectPrice">Тэг проекта</label>
        <input
          type="text"
          id="projectPrice"
          v-model="projectPrice"
          required />
      </div>
      <div class="form-group">
        <label for="projectImage">Изображение проекта</label>
        <input
          type="file"
          id="projectImage"
          @change="onFileChange"
          accept="image/*" />
      </div>
      <button type="submit">Добавить проект</button>
    </form>

    <div class="product-preview" v-if="previewImage">
      <h2>Предпросмотр изображения:</h2>
      <img :src="previewImage" alt="Предпросмотр" />
    </div>
  </div>
  <div v-else>
    <h1 style="color: red">Access Denied</h1>
    <p style="display: flex; justify-content: center">
      <a href="/adm-login">Please log in</a>
    </p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AdmPage",
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters.isAuthenticated);
    const user = computed(() => store.getters.user);

    return {
      isAuthenticated,
      user,
    };
  },
  data() {
    return {
      projectName: "",
      projectDescription: "",
      projectPrice: null,
      previewImage: null,
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addProduct() {
      console.log("Товар добавлен:", {
        name: this.projectName,
        description: this.projectDescription,
        price: this.projectPrice,
      });
    },
  },
};
</script>

<style scoped>
.admin-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #359a70;
}

.product-preview {
  margin-top: 20px;
  text-align: center;
}

.product-preview img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
