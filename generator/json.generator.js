const fs = require('fs');
const _ = require('lodash');
const YAML = require('yaml');

const { validateJSON } = require('../validator/validator');

const tokenDefinitionsPath = './definitions';

const discoverDefinitions = () => {
    const definitionFiles = [];
    fs.readdirSync(tokenDefinitionsPath).forEach(file => {
        definitionFiles.push(file);
    });
    return definitionFiles;
}
const parseYAMLToJson = (yamlPath) => {
    const file = fs.readFileSync(yamlPath, 'utf8');
    return YAML.parse(file);
}

const mergeDefinitions = (definitions = [{}]) => {
    let definition = {};
    definitions.forEach(def => definition = _.merge(definition, def));
    return definition;
}

const generateJson = (buildPath) => {
    const parsedDefinitions = [];
    discoverDefinitions().forEach(fileName => 
        parsedDefinitions.push(parseYAMLToJson(`${tokenDefinitionsPath}/${fileName}`))
    );
    const isValid = !parsedDefinitions.some((item) =>  !validateJSON(item));
    if (isValid) {
        const mergedDefinitions = mergeDefinitions(parsedDefinitions);
        fs.writeFileSync(`${buildPath}/tokens.json`, JSON.stringify(mergedDefinitions));
        return mergedDefinitions;
    }
    
}

module.exports = {
    generateJson
}