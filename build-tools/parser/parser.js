const fs = require('fs');
const _ = require('lodash');
const YAML = require('yaml');
const { validateJSON } = require('../validator/validator');
const { usePlaceHolderDefinition } = require('../../config');

const tokenDefinitionsPath = './definitions';
const placeHolderFileName = '_placeholder.yaml'
const discoverDefinitions = () => {
    const definitionFiles = [];
    fs.readdirSync(tokenDefinitionsPath).forEach(file => {
        if (file === placeHolderFileName) {
            usePlaceHolderDefinition && definitionFiles.push(`${tokenDefinitionsPath}/${file}`);
        }
        else {
            definitionFiles.push(`${tokenDefinitionsPath}/${file}`);
        }
    });
    return definitionFiles;
};
const parseYAMLToJson = (yamlPath) => {
    const file = fs.readFileSync(yamlPath, 'utf8');
    return YAML.parse(file);
};
const mergeDefinitions = (definitions = [{}]) => {
    let definition = {};
    definitions.forEach(def => definition = _.merge(definition, def));
    return definition; 
};

const parse = () => {
    const definitions = [];
    discoverDefinitions().forEach(yamlPath => definitions.push(parseYAMLToJson(yamlPath)));
    const mergedDefinitions = mergeDefinitions(definitions);
    return validateJSON(mergedDefinitions) && mergedDefinitions;
}

module.exports = {
    parse
}