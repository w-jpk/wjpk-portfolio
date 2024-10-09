<template>
  <div class="add-project">
    <div class="form-section">
      <h1>Add New Project</h1>
      <div class="input__wrapper">
        <label class="input__label">Creation Date: {{ formattedDate }}</label>
      </div>

      <!-- Проектные поля -->
      <div class="project-fields">
        <div class="inline-fields">
          <InputField
            id="projectName"
            v-model="form.projectName"
            placeholder="Project Name"
            required />
          <InputField
            id="projectTag"
            v-model="form.projectTag"
            placeholder="Project Tag"
            required
            maxlength="50" />
        </div>
      </div>

      <!-- Информация о клиенте -->
      <div class="client-info">
        <h2>Client Information</h2>
        <InputField
          id="clientName"
          v-model="form.clientName"
          placeholder="Client Name"
          required />
        <InputField
          id="clientServices"
          v-model="form.clientServices"
          placeholder="Client Services"
          required />
        <InputField
          id="clientWebsite"
          v-model="form.clientWebsite"
          placeholder="Client Website"
          required />
      </div>

      <InputField
        id="toolsTechnologies"
        v-model="form.toolsTechnologies"
        placeholder="Tools & Technologies"
        required
        maxlength="200" />

      <InputField
        id="description"
        v-model="form.description"
        placeholder="Description"
        required
        textarea />
    </div>

    <!-- Описание и Dropzone справа -->
    <div class="description-dropzone">
      <!-- Dropzone для загрузки изображений -->
      <div class="dropzone" @dragover.prevent @drop.prevent="handleDrop">
        <p v-if="!imagePreview">
          Drag & drop your images here or click to upload
        </p>
        <input
          type="file"
          accept="image/*"
          @change="handleFileUpload"
          multiple
          hidden
          ref="fileInput" />
        <button type="button" @click="selectFiles">Upload Image</button>
        <div class="image-preview" v-if="imagePreview">
          <img :src="imagePreview" alt="Image preview" />
        </div>
      </div>

      <!-- Кнопка отправки формы -->
      <button class="submit-button" type="submit">Add Project</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InputField from "../components/InputField.vue";

export default {
  data() {
    return {
      form: {
        projectName: "",
        projectTag: "",
        clientName: "",
        clientServices: "",
        clientWebsite: "",
        toolsTechnologies: "",
        description: "",
        creationTime: new Date().toISOString(), // Устанавливаем сегодняшнюю дату в ISO формате
        imageFiles: [],
      },
      imagePreview: null,
    };
  },
  computed: {
    formattedDate() {
      const options = { month: "long", day: "numeric", year: "numeric" };
      return new Date(this.form.creationTime).toLocaleDateString(
        "en-US",
        options
      );
    },
  },
  methods: {
    async submitForm() {
      try {
        await axios.post("http://localhost:3000/api/projects", this.form);
        alert("Project added successfully!");
      } catch (error) {
        console.error("There was an error adding the project:", error);
      }
    },
    handleFileUpload(event) {
      this.uploadFiles(event.target.files);
    },
    handleDrop(event) {
      this.uploadFiles(event.dataTransfer.files);
    },
    uploadFiles(files) {
      if (files.length) {
        const fileArray = Array.from(files);
        this.form.imageFiles = fileArray.map((file) => file.name);
        this.imagePreview = URL.createObjectURL(fileArray[0]);
      }
    },
    selectFiles() {
      this.$refs.fileInput.click();
    },
  },
  components: {
    InputField,
  },
};
</script>

<style scoped>
.add-project {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.form-section {
  display: flex;
  flex-direction: column;
  width: 60%; /* Устанавливаем ширину для левой части */
}

h1 {
  margin: 0;
}

.input__wrapper {
  margin-bottom: 15px;
}

.input__label {
  font-weight: bold;
  margin-bottom: 5px;
}

.inline-fields {
  display: flex;
  gap: 15px; /* Отступ между полями */
}

.client-info {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-top: 1rem; /* Отступ сверху */
}

.client-info h2 {
  margin: 0 0 10px; /* Отступ снизу заголовка */
}

.description-dropzone {
  width: 50%; /* Устанавливаем ширину для правой части */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-left: 20px; /* Отступ слева от правой части */
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 2rem; /* Отступ сверху для кнопки */
}

button:hover {
  background-color: #0056b3;
}

.dropzone {
  border: 2px dashed #007bff;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-top: 1rem; /* Отступ сверху для dropzone */
}

.image-preview {
  margin-top: 10px;
}

.image-preview img {
  max-width: 100%;
  max-height: 200px;
  object-fit: cover;
}
</style>
