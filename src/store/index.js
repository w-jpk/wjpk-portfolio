import { createStore } from "vuex";

export default createStore({
  state: {
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
    
  },
  mutations: {

  },
  actions: {

  },
});
