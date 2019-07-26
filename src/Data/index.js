import aboutMe from "./aboutMe.js";
import projects from "./project.js";
import activities from "./activity.js";

function getAboutMe() {
  return aboutMe;
}

function getProjects() {
  return projects;
}

function getActivites() {
  return activities;
}

export { getAboutMe, getProjects, getActivites };
