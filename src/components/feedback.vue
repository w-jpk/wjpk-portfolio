<template>
  <div class="feedback-container">
    <div class="input-group">
      <input type="text" v-model="name" placeholder="Имя" class="input-name" />
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        class="input-email" />
    </div>
    <input
      type="text"
      v-model="website"
      placeholder="Web-site"
      class="input-website" />
    <div class="message-container">
      <textarea
        v-model="message"
        placeholder="Ваше сообщение"
        class="input-message"
        maxlength="500"></textarea>
      <div :class="['char-count', { warn: message.length >= 490 }]">
        {{ message.length }} / 500
      </div>
    </div>
    <button @click="submitFeedback">Отправить</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      website: "",
      message: "",
    };
  },
  methods: {
    ...mapActions(["feedback"]),
    async submitFeedback() {
      if (!this.name || !this.email || !this.website || !this.message) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      try {
        await this.$store.dispatch("feedback", {
          name: this.name,
          email: this.email,
          website: this.website,
          message: this.message,
        });
        this.name = "";
        this.email = "";
        this.website = "";
        this.message = "";
        alert("Feedback successful!");
      } catch (error) {
        console.error("feedback error:", error);
        alert("feedback failed!");
      }
    },
  },
};
</script>

<style scoped>
.feedback-container {
  background-color: white;
  border: 2px solid black;
  padding: 2rem;
  border-radius: 2rem;
}

.input-group {
  display: flex;
  justify-content: space-between;
}

.input-name,
.input-email,
.input-website,
.input-message {
  width: 48%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.input-message {
  width: 98%;
  height: 90px;
}

.char-count {
  display: flex;
  justify-content: end;
  right: 10px;
  bottom: 10px;
  font-size: 0.8rem;
  color: gray;
}

.char-count.warn {
  color: red;
}

button {
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

button:hover {
  background-color: gray;
}
</style>
