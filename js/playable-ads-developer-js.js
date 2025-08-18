"use strict";

import renderProfile from "./common/render-en.js";

const profile = "../data/playable-ads-developer-js.json";

fetch(profile)
  .then((res) => res.json())
  .then((data) => {
    renderProfile(data);
  });
