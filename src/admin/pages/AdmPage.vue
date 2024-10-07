<template>
  <div class="admin-page">
    <h1>Добавление товара</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productName">Название товара</label>
        <input type="text" id="productName" v-model="productName" required />
      </div>
      <div class="form-group">
        <label for="productDescription">Описание товара</label>
        <textarea
          id="productDescription"
          v-model="productDescription"
          required></textarea>
      </div>
      <div class="form-group">
        <label for="productPrice">Цена товара</label>
        <input
          type="number"
          id="productPrice"
          v-model="productPrice"
          required />
      </div>
      <div class="form-group">
        <label for="productImage">Изображение товара</label>
        <input
          type="file"
          id="productImage"
          @change="onFileChange"
          accept="image/*" />
      </div>
      <button type="submit">Добавить товар</button>
    </form>

    <div class="product-preview" v-if="previewImage">
      <h2>Предпросмотр изображения:</h2>
      <img :src="previewImage" alt="Предпросмотр" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AdmPage",
  data() {
    return {
      productName: "",
      productDescription: "",
      productPrice: null,
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
        name: this.productName,
        description: this.productDescription,
        price: this.productPrice,
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
