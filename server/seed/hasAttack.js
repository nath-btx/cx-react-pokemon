const knex = require('knex')({
    client :'pg',
	connection: {
		host : '127.0.0.1',
		user: 'postgres',
		password: 'trombone',
        database: 'pokemon',
    }
})

const file = require('../../pokedex.json')
let attacks = []
knex.schema.dropTableIfExists('hasattack').then(function(){
    return knex.schema.createTable('hasattack', function(t) {
        t.increments().primary()
        t.integer('numéro')
        t.foreign('numéro').references('pokemons.numéro')
        t.string('pokemon_name', 100)
        t.integer('attack_id')
        t.foreign('attack_id').references('id_attaque')
        t.string('attack_name', 100)
    })
})
.then(() => {
    let c = 0
    for(let i = 0; i< file.length;i++){
        for(let j = 0; j < file[i].attaques.length; j ++){
            knex('hasattack').insert({
                numéro : file[i].numéro,
                pokemon_name : file[i].nom,
                attack_name : file[i].attaques[j].nom,
                attack_id : knex('attaques').where({nom : file[i].attaques[j].nom}).select('id_attaque')
            })
                .then(function() {
            console.log(`pokemon ${file[i].nom} attack : ${file[i].attaques[j].nom}`)
            })
            }    
        }
    })
