const { makeExecutableSchema} = require('@graphql-tools/schema')
const resolvers = require('./resolvers')
const getSchemas = require('./schemas')

async function getSchemasWithResolvers() {
    const schema = await getSchemas();
    return makeExecutableSchema({ typeDefs: schema, resolvers });
}

module.exports = {
    getSchemas: getSchemasWithResolvers
};
