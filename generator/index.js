const { generateCss } = require("./css.generator");
const { generateJson } = require('./json.generator');
const { generateSass } = require("./sass.generator");
module.exports = {
    json: generateJson,
    css : generateCss,
    sass: generateSass
}