"use strict";

import renderProfile from "./common/render.js";

const profile = "../data/expert-monitoring-evaluation.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
