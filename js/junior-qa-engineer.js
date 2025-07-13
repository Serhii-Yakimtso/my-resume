"use strict";

import renderProfile from "./render.js";

const profile = "../data/junior-qa-engineer.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
