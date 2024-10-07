<template>
  <div>
    <p v-if="isAuthenticated">Welcome, {{ currentUser?.email }}</p>
    <p v-else>Please log in.</p>
  </div>
  <div class="login-container">
    <h1>Admin Login</h1>
    <form @submit.prevent="login()">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>

      <div v-if="authError" class="error-message">
        {{ authError }}
      </div>
    </form>
    <button
      v-if="isAuthenticated"
      @click="logout"
      style="margin-top: 1rem; background-color: red">
      Logout
    </button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "AdminLogin",
  setup() {
    const store = useStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const isLoginMode = ref(true);

    const isAuthenticated = computed(() => store.getters.isAuthenticated);
    const authError = computed(() => store.getters.authError);
    const currentUser = computed(() => store.getters.currentUser);

    const login = async () => {
      await store.dispatch("login", {
        email: email.value,
        password: password.value,
      });
      if (store.getters.isAuthenticated) {
        router.push({ name: "AdmPage" });
      } else {
        console.error("Ошибка аутентификации");
      }
    };

    const logout = () => {
      store.dispatch("logout");
    };

    const toggleMode = () => {
      isLoginMode.value = !isLoginMode.value;
    };

    return {
      email,
      password,
      isLoginMode,
      toggleMode,
      login,
      logout,
      isAuthenticated,
      authError,
      currentUser,
    };
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
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

.form-group input {
  width: 100%;
  padding: 8px;
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

.error-message {
  margin-top: 10px;
  color: red;
  text-align: center;
}

p {
  text-align: center;
}

a {
  cursor: pointer;
  color: #42b983;
}

a:hover {
  color: #359a70;
}
</style>
