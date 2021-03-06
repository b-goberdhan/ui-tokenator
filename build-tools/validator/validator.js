const { Validator } = require('jsonschema');

const validateJSON = (json) => {
    const validator = new Validator();
    const keys = Object.keys(json);
    const keysSchema = {
        type: 'array',
        items: {
            type: 'string',
            pattern: "^((?!\\.).)*$"
        }
    };
   
    const values = Object.values(json);
    const valuesSchema = {
        type: 'array',
        items: {
            type: 'string'
        }
    }
    return validator.validate(keys, keysSchema).valid 
        && validator.validate(values, valuesSchema).valid;
}
module.exports = {
    validateJSON
}