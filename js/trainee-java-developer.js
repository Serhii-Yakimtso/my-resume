"use strict";

import renderProfile from "./render.js";

const profile = "../data/trainee-java-developer.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
