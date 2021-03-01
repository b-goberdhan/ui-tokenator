const themeDefinitionsPath = process.env.THEME_DEFINITIONS_PATH || './definitions';
const environmentName = process.env.ENVIRONMENT_NAME || 'production';
const port = process.env.PORT || 4000;
module.exports = {themeDefinitionsPath, environmentName, port};