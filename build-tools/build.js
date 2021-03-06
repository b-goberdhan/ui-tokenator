const rimraf = require('rimraf');
const fs = require('fs');
const { generateCss, generateSass } = require('../config');
const { json, css, sass } = require('../generator');

const buildPath = './generated-tokens';

const clean = () => {
    rimraf.sync(buildPath);
    fs.mkdirSync(`${buildPath}`);
}

clean();
const jsonTokens = json(buildPath);
if (!jsonTokens) {
    console.error("Error generating tokens, ensure '.' character is not being used in your YAML ");
    process.exit(1);
}
else {
    generateCss && css(buildPath, jsonTokens);
    generateSass && sass(buildPath, jsonTokens);

}

