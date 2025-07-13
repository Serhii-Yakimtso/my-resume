"use strict";

import renderProfile from "./render-en.js";

const profile = "../data/trainee-java-developer-en.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
