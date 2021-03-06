const {validateJSON} = require('../validator/validator');
const fs = require('fs');
const generateCss = (buildPath, json) => {
    if (validateJSON(json)) {
        const keys = Object.keys(json);
        let tokens = '';
        keys.map(key => tokens += `--${key}: ${json[key]};\n`);
        tokens = `:root {\n${tokens}}`;
        try {
            fs.writeFileSync(`${buildPath}/tokens.css`, tokens);
        }
        catch(e) {
            console.log(e);
        }
    
        return true;
    }
    return false;
}

module.exports = {
    generateCss
}