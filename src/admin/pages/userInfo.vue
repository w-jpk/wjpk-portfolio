<template>
  <div>
    <h1>User Information</h1>
    <div v-if="user">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>ID:</strong> {{ user.userId }}</p>
      <p>
        <strong>Дата регистрации:</strong>
        {{
          user.created_at
            ? new Date(user.created_at).toLocaleString()
            : "Неизвестно"
        }}
      </p>
      <p>
        <strong>Время авторизации:</strong>
        {{ new Date(user.iat * 1000).toLocaleString() }}
      </p>
      <button @click="logoutUser">Logout</button>
    </div>
    <div v-else>
      <p>No user information available.</p>
    </div>
  </div>
  <div style="margin-top: 4rem">
    <h1>All Users</h1>
    <button @click="loadUsers">Load Users</button>
    <table v-if="users.length" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ new Date(user.created_at).toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p>No users found or data not loaded yet.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user", "users"]), // Получаем доступ к геттеру user из Vuex
  },
  mounted() {
    if (!this.user) {
      this.$store.dispatch("fetchUser");
    }
    console.log("User data:", this.user);
    this.loadUsers();
    if (this.user && this.user.created_at) {
      console.log("User created_at:", this.user.created_at); // Дополнительное логирование
    }
  },
  methods: {
    loadUsers() {
      this.$store.dispatch("fetchUsers"); // Делаем запрос на получение списка пользователей
    },
    logoutUser() {
      this.$store.dispatch("logout"); // Вызываем action logout
      this.$router.push("/adm-login"); // Перенаправляем на страницу логина
    },
  },
};
</script>
