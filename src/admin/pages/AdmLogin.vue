<template>
  <div class="auth-container">
    <h2 v-if="isRegistering">Register</h2>
    <h2 v-else>Login</h2>
    <form @submit.prevent="login()" class="auth-form">
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        required
        class="auth-input" />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
        class="auth-input" />
      <button type="submit" class="auth-button">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    async getUserProfile() {
      try {
        const response = await axios.get("http://localhost:5000/profile", {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        });
        console.log("User profile data:", response.data.user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
  },
  methods: {
    ...mapActions(["register", "login"]),
    async register() {
      try {
        await this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
        });
        alert("Registration successful!");
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration failed!");
      }
    },
    async login() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        alert("Login successful!");
        this.$router.push("/user");
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed!");
      }
    },
    toggleForm() {
      this.isRegistering = !this.isRegistering;
    },
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: "Arial", sans-serif;
}

.auth-form {
  display: flex;
  flex-direction: column;
}

.auth-input {
  margin: 10px 0;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.auth-input:focus {
  border-color: #007bff; /* Цвет границы при фокусе */
  outline: none;
}

.auth-button {
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff; /* Основной цвет кнопки */
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.auth-button:hover {
  background-color: #0056b3; /* Цвет кнопки при наведении */
}

.toggle-form {
  text-align: center;
  margin-top: 10px;
  color: #007bff; /* Цвет текста переключателя */
  cursor: pointer;
  text-decoration: underline;
}

.toggle-form:hover {
  color: #0056b3; /* Цвет текста при наведении */
}
</style>
