"use strict";

import {
  header,
  summary,
  projects,
  experience,
  achivments,
  education,
  photo,
  contacts,
  techSkills,
  softSkills,
  languages,
} from "./getElement.js";

import {
  headerMarkup,
  summaryMarkup,
  projectMarckup,
  experienceMarkup,
  achivmentsMarkup,
  educationMarkUp,
  photoMarkup,
  contactsMarkup,
  techSkillsMarkup,
  softSkillsMarkup,
  languagesMarkup,
} from "./getMarkup-en.js";

export default function renderProfile(data) {
  header.innerHTML = headerMarkup(data);
  summary.innerHTML = summaryMarkup(data);
  projects.innerHTML = projectMarckup(data);
  experience.innerHTML = experienceMarkup(data);
  achivments.innerHTML = achivmentsMarkup(data);
  education.innerHTML = educationMarkUp(data);
  photo.innerHTML = photoMarkup(data);
  contacts.innerHTML = contactsMarkup(data);
  techSkills.innerHTML = techSkillsMarkup(data);
  softSkills.innerHTML = softSkillsMarkup(data);
  languages.innerHTML = languagesMarkup(data);
}
