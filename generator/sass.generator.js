const {validateJSON} = require('../validator/validator');
const fs = require('fs');
const generateSass = (buildPath, json) => {
    if (validateJSON(json)) {
        const keys = Object.keys(json);
        let tokens = '';
        keys.map(key => tokens += `$${key}: ${json[key]};\n`);
        try {
            fs.writeFileSync(`${buildPath}/tokens.scss`, tokens);
        }
        catch(e) {
            console.log(e);
        }
    
        return true;
    }
    return false;
}

module.exports = {
    generateSass
}