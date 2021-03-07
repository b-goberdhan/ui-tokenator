const rimraf = require('rimraf');
const fs = require('fs');
const { generateCss, generateSass, generateJson } = require('../config');
const { json, css, sass } = require('./generator');
const { parse } = require('./parser/parser');
const { ERROR_COULD_NOT_PARSE } = require('../constants/error.constant');

const generatedTokensPath = './generated-tokens';

const clean = () => {
    rimraf.sync(generatedTokensPath);
    fs.mkdirSync(generatedTokensPath);
};

clean();
const jsonTokens = parse();
if (!jsonTokens) {
    console.error(ERROR_COULD_NOT_PARSE);
    process.exit(1);
}
else {
    generateJson && json(generatedTokensPath, jsonTokens);
    generateCss && css(generatedTokensPath, jsonTokens);
    generateSass && sass(generatedTokensPath, jsonTokens);
}
