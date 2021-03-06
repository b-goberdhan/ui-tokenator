const fs = require('fs');
const generateCss = (generatedTokensPath, json) => {
    const keys = Object.keys(json);
    let tokens = '';
    keys.map(key => tokens += `--${key}: ${json[key]};\n`);
    tokens = `:root {\n${tokens}}`;
    try {
        fs.writeFileSync(`${generatedTokensPath}/tokens.css`, tokens);
    }
    catch(e) {
        console.log(e);
    }
}

module.exports = {
    generateCss
}