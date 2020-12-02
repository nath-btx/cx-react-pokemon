const fs = require('fs')
const readLine = require('readline')
const filename = "./pokedex2.json"
const file = require('../pokedex.json')



const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'trombone',
        database: 'pokemon'
    }
})

knex.schema.dropTableIfExists('pokemons').then(function(){
    return knex.schema.createTable('pokemons',function(t) {
        t.integer('id_pokemon').primary()
        t.string('nom', 100)
        t.string('nomen', 100)
        t.string('nomja', 100)
        t.string('nomtm', 100)
        t.string('nomde', 100)
        t.string('légende', 100)
        t.integer('ndex')
        t.integer('jdex')
        t.integer('hdex')
        t.integer('fdex')
        t.string('odex', 100)
        t.string('opdex', 100)
        t.string('espece', 100)
        t.float('taille')
        t.float('poids')
        t.float('fmratio')
        t.integer('oeufpas')
        t.string('effortval', 100)
        t.string('type1', 100)
        t.string('type2', 100)
        t.integer('expval')
        t.string('expmax', 100)
        t.integer('captureval')
        t.string('groupoeuf1', 100)
        t.string('groupoeuf2', 100)
        t.string('capspe1', 100)
        t.string('capspe2', 100)
        t.string('capspe2-reve', 100)
        t.string('couleur', 100)
        t.integer('forme')
        t.string('pokemon', 100)
    })
})

knex.schema.dropTableIfExists('attaques').then(function(){
    return knex.schema.createTable('attaques',function(t) {
        t.increments("id_attaque")
        t.string('nom', 100)
        t.string('puissance',100)
        t.string('precision',100)
        t.integer('pp')
    })
})


.then(() => {
    for(let i = 0; i < file.length - 1; i++){
        knex('pokemons').insert({id_pokemon : file[i].numéro, nom : file[i].nom, nomen : file[i].nomen }).then(() => {
            console.log('worked')
        })
    }
})


process.exit(0);



