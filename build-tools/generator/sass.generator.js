
const fs = require('fs');
const generateSass = (generatedTokensPath, json) => {
    const keys = Object.keys(json);
    let tokens = '';
    keys.map(key => tokens += `$${key}: ${json[key]};\n`);
    try {
        fs.writeFileSync(`${generatedTokensPath}/tokens.scss`, tokens);
    }
    catch(e) {
        console.log(e);
    }
}

module.exports = {
    generateSass
}