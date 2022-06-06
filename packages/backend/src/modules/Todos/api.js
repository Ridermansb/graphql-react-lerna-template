const fetch = require('isomorphic-fetch');

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

function getAllTodos() {
    return fetch(TODOS_URL).then(resp => resp.json());
}

module.exports = {
    getAllTodos
}
