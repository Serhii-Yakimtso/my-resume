"use strict";

import renderProfile from "./common/render-en.js";

const profile = "../data/javascript-developer-en.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
