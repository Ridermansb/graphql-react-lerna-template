const { getAllTodos } = require('./api')

module.exports = {
    Query: {
        todos: () => getAllTodos(),
    },
}
