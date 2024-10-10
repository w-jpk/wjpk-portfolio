<template>
  <div class="add-project">
    <div class="form-section">
      <h1>Add New Project</h1>
      <div class="input__wrapper">
        <label class="input__label">Creation Date: {{ formattedDate }}</label>
      </div>
      <div class="project-fields">
        <div class="inline-fields">
          <InputField
            id="projectName"
            v-model="form.projectname"
            placeholder="Project Name"
            required />
          <InputField
            id="projectTag"
            v-model="form.projecttag"
            placeholder="Project Tag"
            required
            maxlength="50" />
        </div>
      </div>
      <div class="client-info">
        <h2>Client Information</h2>
        <InputField
          id="clientName"
          v-model="form.clientname"
          placeholder="Client Name"
          required />
        <InputField
          id="clientServices"
          v-model="form.clientservices"
          placeholder="Client Services"
          required />
        <InputField
          id="clientWebsite"
          v-model="form.clientwebsite"
          placeholder="Client Website"
          required />
      </div>
      <InputField
        id="toolsTechnologies"
        v-model="form.toolstechnologies"
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
    <div class="description-dropzone">
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
      <button class="submit-button" @click="submitForm">Add Project</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InputField from "../components/InputField.vue";
import { mapActions } from "vuex";

export default {
  name: "AdmPage",
  data() {
    return {
      form: {
        projectname: "",
        projecttag: "",
        clientname: "",
        clientservices: "",
        clientwebsite: "",
        toolstechnologies: "",
        description: "",
        creationtime: new Date().toISOString(),
        imagefiles: "",
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
    ...mapActions(["addProject"]),
    async submitForm() {
      try {
        await axios.post("http://localhost:5000/add/project", this.form);
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
        this.form.imagefiles = fileArray.map((file) => file.name);
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
  width: 60%;
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
  gap: 15px;
}

.client-info {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-top: 1rem;
}

.client-info h2 {
  margin: 0 0 10px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 2rem;
}

button:hover {
  background-color: #0056b3;
}

.description-dropzone {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  height: 100vh;
}

.dropzone {
  border: 2px dashed #007bff;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-top: 1rem;
  width: 80%;
}

.submit-button {
  margin-top: 5rem;
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
