const {join} = require("path");
const {loadFilesSync} = require("@graphql-tools/load-files");
const {mergeResolvers} = require("@graphql-tools/merge");

const allResolvers = loadFilesSync(join(__dirname, '**/*.resolvers.*'));
const resolvers = mergeResolvers(allResolvers);

module.exports = resolvers
