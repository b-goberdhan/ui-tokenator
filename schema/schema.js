const fs = require('fs');
const YAML = require('yaml');
const {composeWithJson} = require('graphql-compose-json');
const {schemaComposer} = require('graphql-compose');
const _ = require('lodash');

const DEFINITIONS_PATH = './definitions';

const discoverDefinitions = () => {
    const definitionFiles = [];
    fs.readdirSync(DEFINITIONS_PATH).forEach(file => {
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

const generateSchema = () => {
    
    const parsedDefinitions = [];
    discoverDefinitions().forEach(fileName => 
        parsedDefinitions.push(parseYAMLToJson(`${DEFINITIONS_PATH}/${fileName}`))
    );
    const json = {theme: mergeDefinitions(parsedDefinitions) }
    
    const schema = composeWithJson('theme', json);
    schemaComposer.Query.addFields(schema.getFields());
    
    const typeDefs = schemaComposer.toSDL();
    const resolvers = {Query: {theme: () => json.theme}};
    
    return {typeDefs, resolvers}
};
module.exports = {
    generateSchema
}