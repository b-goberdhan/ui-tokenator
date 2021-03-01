const {ApolloServer} = require('apollo-server');
const {generateSchema} = require('./schema/schema');
const config = require('./config');

const server = new ApolloServer(generateSchema(config.themeDefinitionsPath));

server.listen({port: config.port}).then(({url}) => console.log(`Server running on ${url}`));