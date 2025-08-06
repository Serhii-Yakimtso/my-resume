"use strict";

export function headerMarkup(data) {
  const { myNameEn, myNameUa, position } = data.header;

  return `
            <div class="container">
              <h1 class="main-title">
                ${myNameEn}<br />
                ${myNameUa}
              </h1>
              <p>
                <strong>Посада:</strong> ${position}
              </p>
            </div>
  `;
}

export function summaryMarkup(data) {
  const { summary } = data;

  return `
            <div class="container">
              <h2 class="title visually-hidden">Про себе</h2>
              <p>
                ${summary}
              </p>
            </div>
  
  `;
}

export function projectMarckup(data) {
  const { projects } = data;

  const {
    settings: { gitHub },
  } = data;

  return `${
    gitHub
      ? `
            <div class="container">
            <h2 class="title">Проекти</h2>
            <ul class="projects-list">
              ${projects
                .map(
                  ({
                    title,
                    prjectLink,
                    gitLink,
                    stack,
                    discription,
                    role,
                  }) => `
                    <li class="projects-card">
                      <h3 class="prj-title"><a class="prj-git" href="${prjectLink}">${title}</a></h3>
                      <div class="prj-wrapper">
                        <a class="prj-git" href="${gitLink}">GitHub</a>
                        <p class="prj-stack">[ ${stack} ]</p>
                      </div>
                      <p class="prj-discription">${discription}</p>
                      <p class="prj-role">Роль: ${role}</p>
                    </li>
                  `
                )
                .join("")}

            </ul>
          </div>
  `
      : ""
  }`;
}

export function experienceMarkup(data) {
  const { experience } = data;

  return `
            <div class="container">
              <h2 class="title">Досвід роботи</h2>
  
              <ul class="experience-list">
                ${experience
                  .map(
                    ({ title, timeTo, timeFrom, place, responsibilities }) => `
                  <li class="experience-card">
                    <h3 class="card-title">${title}</h3>
                    <div class="card-wrapper">
                      <p>${timeFrom} — ${timeTo}</p>
                      <p>${place}</p>
                    </div>
                    <ul class="list">
                      ${responsibilities
                        .map(
                          (item) => `
                      <li class="card-item">${item}</li>
                      `
                        )
                        .join("")}
                    </ul>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
  `;
}

export function achivmentsMarkup(data) {
  const { achivments } = data;
  const {
    settings: { gitHub },
  } = data;

  return `${
    !gitHub
      ? `
            <div class="container">
              <h2 class="title">Досягнення</h2>
              <ul class="list">
                ${achivments
                  .map((achiv) => `<li class="achivments-item">${achiv}</li>`)
                  .join("")}
              </ul>
            </div>
  `
      : ""
  }`;
}

export function educationMarkUp(data) {
  const { education } = data;
  return `
            <div class="container">
              <h2 class="title">Освіта</h2>
  
              <ul id="education" class="list">
                ${education
                  .map(
                    ({ title, place, date }) => `
                              <li class="education-item">
                                <p><strong>${title}</strong></p>
                                <p>${place}</p>
                                <p>${date}</p>
                              </li>

                              `
                  )
                  .join("")}
                </li>
              </ul>
            </div>
  
  `;
}

export function photoMarkup(data) {
  const { photo } = data;
  return `
            <img
              class="img"
              src="${photo}"
              alt="my photo"
              width="196"
              height="196"
            />
  `;
}

export function contactsMarkup(data, settings) {
  const {
    contacts: {
      phone,
      email,
      telegramName,
      telegramWay,
      residence,
      gitHubWay,
      gitHubName,
    },
  } = data;

  const {
    settings: { gitHub },
  } = data;

  return `
            <div class="container">
              <h2 class="title">Контакти</h2>
              <ul class="contacts-list">
                <li class="contacts-item">
                  <strong>Телефон:</strong> ${phone}
                </li>
                <li class="contacts-item">
                  <strong>Email:</strong>
                  <a href="mailto:${email}">${email}</a>
                </li>
                <li class="contacts-item">
                  <strong>Telegram:</strong>
                  <a href="${telegramWay}">${telegramName}</a>
                </li>
                ${
                  gitHub
                    ? `<li class="contacts-item">
                          <strong>GitHub:</strong>
                          <a href="${gitHubWay}">${gitHubName}</a>
                        </li>`
                    : ""
                }
                <li class="contacts-item">
                  <strong>Місто:</strong> ${residence}
                </li>
  
              </ul>
            </div>
  `;
}

export function techSkillsMarkup(data) {
  const { techSkills } = data;

  return `
            <div class="container">
              <h2 class="title">Навички</h2>
              <ul class="list">
                ${techSkills
                  .map((skill) => `<li class="tech-item">${skill}</li>`)
                  .join("")}
              </ul>
            </div>
  `;
}

export function softSkillsMarkup(data) {
  const { softSkills } = data;
  return `
            <div class="container">
              <h2 class="title">Особисті якості</h2>
              <ul class="list">
                ${softSkills
                  .map((skill) => `<li class="soft-item">${skill}</li>`)
                  .join("")}
              </ul>
            </div>
  `;
}

export function languagesMarkup(data) {
  const { languages } = data;

  return `
            <div class="container">
              <h2 class="title">Мови</h2>
              <ul class="list">
                ${languages
                  .map(
                    ({ lang, level }) =>
                      `<li class="languages-item">${lang} — ${level}</li>`
                  )
                  .join("")}
              </ul>
            </div> 
  `;
}
