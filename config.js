const environmentName = process.env.NODE_ENV || 'production';
const usePlaceHolderDefinition = process.env.USE_PLACE_HOLDER_DEFINITION || false;
const generateJson = process.env.GENERATE_JSON || true;
const generateCss = process.env.GENERATE_CSS || true;
const generateSass = process.env.GENERATE_SASS || true;
const port = process.env.PORT || 8080;
module.exports = {
    environmentName, 
    usePlaceHolderDefinition,
    generateJson,
    generateCss,
    generateSass,
    port
};