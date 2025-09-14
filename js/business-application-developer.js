"use strict";

import renderProfile from "./common/render.js";

const profile = "../data/business-application-developer.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
