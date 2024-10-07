import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import store from "./store";
import { auth } from "./admin/data/firebaseConfig";

library.add(fas);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

store.dispatch("checkAuth");

// Проверка состояния аутентификации
auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch("setUser", user); // Установка пользователя в store
  } else {
    store.dispatch("setUser", null); // Если нет авторизованного пользователя
  }
});
