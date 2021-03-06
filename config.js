
const environmentName = process.env.ENVIRONMENT_NAME || 'production';
const generateCss = process.env.GENERATE_CSS || true;
const generateSass = process.env.GENERATE_SASS || true;
const port = process.env.PORT || 4000;
module.exports = {
    environmentName, 
    generateCss,
    generateSass,
    port
};