const environmentName = process.env.ENVIRONMENT_NAME || 'production';
const generateJson = process.env.GENERATE_JSON || true;
const generateCss = process.env.GENERATE_CSS || true;
const generateSass = process.env.GENERATE_SASS || true;
const port = process.env.PORT || 4000;
module.exports = {
    environmentName, 
    generateJson,
    generateCss,
    generateSass,
    port
};