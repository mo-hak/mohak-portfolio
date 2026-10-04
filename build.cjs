// Regenerates cv.txt and llms.txt from data.js. Run after editing data.js:
//   node build.cjs
const fs = require("fs");
const path = require("path");
const { CV, toLlmsTxt, toCvTxt } = require("./data.js");

fs.writeFileSync(path.join(__dirname, "llms.txt"), toLlmsTxt(CV));
fs.writeFileSync(path.join(__dirname, "cv.txt"), toCvTxt(CV));
console.log("wrote llms.txt and cv.txt");
