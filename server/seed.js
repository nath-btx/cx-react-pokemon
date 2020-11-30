const knex = require('knex')
const pokedex = require('../data/pokedex.json')

const database = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'natoz',
        password: '',
        database: 'pokemons'
    },
    searchPath: ['knex', 'public']
})

console.log("Hello World!")