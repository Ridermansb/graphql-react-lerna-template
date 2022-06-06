const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

function getSchemas() {
    return loadSchemaSync('./src/modules/**/*.graphql', {
        loaders: [new GraphQLFileLoader()]
    });
}

module.exports = getSchemas;
