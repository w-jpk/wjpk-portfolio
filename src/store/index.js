import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    user: null,
    users: [],
    feedback: null,
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
        description:
          "1 year <br /> СЛУЖБЫ МАТУШКЕ РОССИИ!!! РОССИЯ!!! РОССИЯ!!! РОССИЯ!!!",
      },
      {
        icon: "graduation-cap",
        title: "Education",
        description: "21 years of education <br /> on the street",
      },
    ],
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    user: (state) => state.user,
    users: (state) => state.users,
    feedback: (state) => state.feedback,
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
      // Используем state для получения токена
      try {
        const response = await axios.get("http://localhost:5000/users", {
          headers: { Authorization: `Bearer ${state.token}` }, // Используем токен из состояния
        });
        commit("SET_USERS", response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },
    async logout({ commit }) {
      commit("LOGOUT");
    },
  },
});
