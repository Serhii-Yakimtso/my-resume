"use strict";

import renderProfile from "./common/render-en.js";

const profile = "../data/trainee-fullstack-developer.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
