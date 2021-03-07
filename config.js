const { toLower } = require("lodash");

const environmentName = process.env.NODE_ENV || 'production';
const usePlaceHolderDefinition = toLower(process.env.USE_PLACE_HOLDER_DEFINITION) === 'true';
const generateJson = toLower(process.env.GENERATE_JSON) === 'true';
const generateCss = toLower(process.env.GENERATE_CSS) === 'true';
const generateSass = toLower(process.env.GENERATE_SASS) === 'true';
const port = process.env.PORT || 8080;
module.exports = {
    environmentName, 
    usePlaceHolderDefinition,
    generateJson,
    generateCss,
    generateSass,
    port
};