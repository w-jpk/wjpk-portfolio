import { createStore } from "vuex";
import { auth } from "../admin/data/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
    authError: null,
    loading: false,
    name: "W-JPK",
    exps: [
      {
        icon: ["fas", "code"],
        title: "Frontend Development",
        years: "1.5 Years",
        description:
          "Working with HTML, CSS, and JavaScript to build interactive UI components.",
      },
      {
        icon: ["fas", "database"],
        title: "Backend Development",
        years: "3 Years",
        description:
          "Experience in developing APIs using Node.js and working with SQL databases.",
      },
      {
        icon: ["fas", "project-diagram"],
        title: "Project Management",
        years: "1.5 Years",
        description:
          "Managing multiple projects and teams to ensure successful project deliveries.",
      },
      {
        icon: ["fas", "laptop-code"],
        title: "Full Stack Development",
        years: "4 Years",
        description:
          "Experience with both frontend and backend technologies to deliver full-featured applications.",
      },
    ],
    projects: [
      {
        title: "Project One",
        image: require("@/assets/project-1.png"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://example.com/demo",
        githubLink: "https://github.com/w-jpk",
      },
      {
        title: "Project Two",
        image: require("@/assets/project-2.png"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://example.com/demo",
        githubLink: "https://github.com/w-jpk",
      },
      {
        title: "Project Three",
        image: require("@/assets/project-3.png"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://example.com/demo",
        githubLink: "https://github.com/w-jpk",
      },
    ],
    details: [
      {
        icon: "briefcase",
        title: "Experience",
        description: `1 year <br /> СЛУЖБЫ МАТУШКЕ РОССИИ!!! РОССИЯ!!! РОССИЯ!!! РОССИЯ!!!`,
      },
      {
        icon: "graduation-cap",
        title: "Education",
        description: `21 years of education <br /> on the street`,
      },
    ],
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null;
    },
    authError(state) {
      return state.authError;
    },
    currentUser: (state) => state.user,
    isLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
    SET_AUTH_ERROR(state, error) {
      state.authError = error;
    },
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      commit("SET_LOADING", true); // Установка состояния загрузки
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        commit("SET_USER", userCredential.user);
        commit("SET_AUTH_ERROR", null); // Сброс ошибки
      } catch (error) {
        commit("SET_USER", null);
        commit(
          "SET_AUTH_ERROR",
          "Ошибка входа. Проверьте правильность данных."
        ); // Установка ошибки
      } finally {
        commit("SET_LOADING", false); // Сброс состояния загрузки
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit("LOGOUT");
      } catch (error) {
        console.error("Ошибка выхода:", error);
      }
    },
    async setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    async checkAuth({ commit }) {
      commit("SET_LOADING", true); // Установка состояния загрузки
      onAuthStateChanged(auth, (user) => {
        commit("SET_USER", user);
        commit("SET_LOADING", false); // Сброс состояния загрузки после проверки
      });
    },
  },
});
