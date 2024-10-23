import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    user: null,
    users: [],
    feedback: [],
    projects: [],
    name: "W-JPK",
    exps: [
      {
        icon: ["fas", "code"],
        title: "HTML & CSS",
        years: "4 месяца",
        description: "Основы верстки и создания адаптивных интерфейсов.",
      },
      {
        icon: ["fab", "js"],
        title: "JavaScript",
        years: "4 месяца",
        description:
          "Базовые навыки работы с языком программирования для интерактивных элементов на сайте.",
      },
      {
        icon: ["fab", "vuejs"],
        title: "Vue.js",
        years: "4 месяца",
        description: "Создание компонентов, управление состоянием приложения.",
      },
      {
        icon: ["fab", "git"],
        title: "Git",
        years: "4 месяца",
        description: "Основы работы с системами контроля версий.",
      },
    ],
    prod_v2: [
      {
        id: 1,
        title: "Сварка Аргоном | Оренбург",
        date: "20.10.2024",
        tag: "Frontend",
        image: [
          {
            id: 1,
            url: require("@/assets/img/welding orenburg/project-1.png"),
          },
          {
            id: 2,
            url: require("@/assets/img/welding orenburg/project-2.png"),
          },
          {
            id: 3,
            url: require("@/assets/img/welding orenburg/project-3.png"),
          },
        ],
        clientname: "Сварка Аргоном",
        clientservices: "Оренбург",
        clientwebsite: "https://welding-orenburg.vercel.app",
        toolstechnologies: "Vue.js, SCSS, TypeScript",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://welding-orenburg.vercel.app",
        githubLink: "https://github.com/w-jpk/welding-orenburg",
      },
      {
        id: 2,
        title: "Сварка Аргоном | Оренбург",
        date: "20.10.2024",
        tag: "Frontend",
        image: [
          {
            id: 1,
            url: require("@/assets/img/welding orenburg/project-1.png"),
          },
          {
            id: 2,
            url: require("@/assets/img/welding orenburg/project-2.png"),
          },
          {
            id: 3,
            url: require("@/assets/img/welding orenburg/project-3.png"),
          },
        ],
        clientname: "Сварка Аргоном",
        clientservices: "Оренбург",
        clientwebsite: "https://welding-orenburg.vercel.app",
        toolstechnologies: "Vue.js, SCSS, TypeScript",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://welding-orenburg.vercel.app",
        githubLink: "https://github.com/w-jpk/welding-orenburg",
      },
      {
        id: 3,
        title: "Сварка Аргоном | Оренбург",
        date: "23.10.2024",
        tag: "Frontend",
        image: [
          {
            id: 1,
            url: require("@/assets/img/welding orenburg/project-1.png"),
          },
          {
            id: 2,
            url: require("@/assets/img/welding orenburg/project-2.png"),
          },
          {
            id: 3,
            url: require("@/assets/img/welding orenburg/project-3.png"),
          },
        ],
        clientname: "Сварка Аргоном",
        clientservices: "Оренбург",
        clientwebsite: "https://welding-orenburg.vercel.app",
        toolstechnologies: "Vue.js, SCSS, TypeScript",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://welding-orenburg.vercel.app",
        githubLink: "https://github.com/w-jpk/welding-orenburg",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Project One",
        image: require("@/assets/project-1.png"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://example.com/demo",
        githubLink: "https://github.com/w-jpk",
      },
      {
        id: 2,
        title: "Project Two",
        image: require("@/assets/project-2.png"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia.",
        liveDemoLink: "https://example.com/demo",
        githubLink: "https://github.com/w-jpk",
      },
      {
        id: 3,
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
        title: "Опыт работы",
        description: "Без опыта",
      },
      {
        icon: "graduation-cap",
        title: "Образование",
        description: "ГАПОУ 'ОКЭИ' <br /> Программист <br /> 2019-2023",
      },
    ],
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    user: (state) => state.user,
    users: (state) => state.users,
    feedback: (state) => state.feedback,
    projects: (state) => state.projects,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    LOGOUT(state) {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    SET_FEEDBACK(state, feedback) {
      state.feedback = feedback;
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async register({ commit }, { email, password }) {
      try {
        await axios.post("http://localhost:5000/register", { email, password });
      } catch (error) {
        console.error("Registration failed:", error);
        throw error;
      }
    },
    async feedback({ commit }, { name, email, website, message }) {
      try {
        await axios.post("http://localhost:5000/feedback", {
          name,
          email,
          website,
          message,
        });
      } catch (error) {
        console.error("Feedback submission failed:", error);
        throw error;
      }
    },
    async addProject(
      { commit },
      {
        projectname,
        creationtime,
        projecttag,
        clientname,
        clientservices,
        clientwebsite,
        toolstechnologies,
        description,
        imagefiles,
      }
    ) {
      try {
        await axios.post("http://localhost:5000/add/project", {
          projectname,
          creationtime,
          projecttag,
          clientname,
          clientservices,
          clientwebsite,
          toolstechnologies,
          description,
          imagefiles,
        });
      } catch (error) {
        console.error("Project submission failed:", error);
        throw error;
      }
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email,
          password,
        });
        commit("SET_TOKEN", response.data.token);
        await dispatch("fetchUser");
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    async fetchUser({ commit, state }) {
      const cachedUser = localStorage.getItem("user");
      if (cachedUser) {
        commit("SET_USER", JSON.parse(cachedUser));
      } else if (state.token) {
        try {
          const userResponse = await axios.get("http://localhost:5000/auth", {
            headers: { Authorization: `Bearer ${state.token}` },
          });
          commit("SET_USER", userResponse.data.user);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          commit("LOGOUT");
        }
      }
    },
    async fetchUsers({ commit, state }) {
      try {
        const response = await axios.get("http://localhost:5000/users", {
          headers: { Authorization: `Bearer ${state.token}` },
        });
        commit("SET_USERS", response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },

    async fetchFeedback({ commit, state }) {
      try {
        const response = await axios.get(
          "http://localhost:5000/feedback/list",
          {
            headers: { Authorization: `Bearer ${state.token}` },
          }
        );
        commit("SET_FEEDBACK", response.data);
      } catch (error) {
        console.error("Failed to fetch feedback:", error);
      }
    },

    async logout({ commit }) {
      commit("LOGOUT");
    },
  },
});
