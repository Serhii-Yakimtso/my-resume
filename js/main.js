"use strict";

console.log("============");

console.log("hello world");

console.log("============");

const info = {
  header: {
    myNameEn: "Serhii Yakimtso",

    myNameUa: "Сергій Якімцо",

    position: "Консультант SAP Master Data / ERP-адміністратор",
  },

  summary:
    "Інженер з надійності з досвідом у SAP ERP. Відкритий до нових технологій, маю аналітичне мислення та навички розробки. Ціную командну роботу та постійний розвиток.",

  experience: [
    {
      title: "Інженер з надійності обладнання",

      timeFrom: "Січень 2019",

      timeTo: "до тепер",

      place: "ArcelorMittal Kryvyi Rih",

      responsibilities: [
        "Впровадження проєкту ARMP",

        "Аналіз несправностей, збір даних, розрахунок KPI",
      ],
    },

    {
      title: "Учасник програми ARMP",

      timeFrom: "Квітень 2014",

      timeTo: "Січень 2019",

      place: "ArcelorMittal Kryvyi Rih",

      responsibilities: [
        "Побудова ієрархії обладнання у SAP",

        "Розробка планів обслуговування",
      ],
    },
  ],

  achivments: {},

  education: [
    {
      title: "Fullstack Developer",

      place: "GoIT",

      date: "2023–2024",
    },

    {
      title: "Інженер-механік (спеціаліст)",

      place: "Криворізький технічний університет ",

      date: "2006–2011",
    },
  ],

  education: {},

  contacts: {},

  techSkills: {},

  softSkills: {},

  languages: {},
};

const header = document.querySelector("#header");

const summary = document.querySelector("#summary");

const experience = document.querySelector("#experience");

const achivments = document.querySelector("#achivments");

const education = document.querySelector("#education");

const contacts = document.querySelector("#contacts");

const techSkills = document.querySelector("#tech-skills");

const softSkills = document.querySelector("#soft-skills");

const languages = document.querySelector("#languages");

const headerMarkup = `

          <div class="container">

            <h1 class="main-title">

              ${info.header.myNameEn}<br />

              ${info.header.myNameUa}

            </h1>

            <p>

              <strong>Посада:</strong> ${info.header.position}

            </p>

          </div>

`;

const summaryMarkup = `

          <div class="container">

            <h2 class="title visually-hidden">Про себе</h2>

            <p>

              ${info.summary}

            </p>

          </div>

`;

const educationMarkUp = `

          <div class="container">

            <h2 class="title">Освіта</h2>

 

            <ul class="list">

              <li class="education-item">

                <strong>Fullstack Developer</strong> — GoIT (2023–2024)

              </li>

              <li class="education-item">

                <strong>Інженер-механік (спеціаліст)</strong> — Криворізький

                технічний університет (2006–2011)

              </li>

            </ul>

          </div>

`;

header.innerHTML = headerMarkup;

summary.innerHTML = summaryMarkup;

// experience

education.innerHTML = educationMarkUp;

// achivments

// contacts

// techSkills

// softSkills

// languages
