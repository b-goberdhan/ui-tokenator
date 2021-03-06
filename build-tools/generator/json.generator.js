const fs = require('fs');

const generateJson = (generatedTokensPath, jsonTokens) => {
    fs.writeFileSync(`${generatedTokensPath}/tokens.json`, JSON.stringify(jsonTokens));
}
module.exports = {
    generateJson
}