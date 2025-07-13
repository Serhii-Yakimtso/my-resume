"use strict";

import renderProfile from "./render-en.js";

const profile = "../data/junior-qa-engineer-en.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
