const fs = require('fs')
const file = require('../../pokedex.json')
const knex = require('knex')({
    client :'pg',
	connection: {
		host : '127.0.0.1',
		user: 'postgres',
		password: 'admin',
        database: 'pokemon',
    }
})


function getKeys (){
    let keys = []
    let data = fs.readFileSync('../../pokedex.json','UTF-8')
    let isLineAttack = false
    const lines = data.split(/\r?\n/)
    lines.forEach((line) => {
        line = line.replace(/\s/g, "")
        if (line.startsWith('"attaques"')){
            isLineAttack = true;
        }
        if (line.startsWith(']')){
            isLineAttack = false
        }
        else if(!isLineAttack && line.startsWith("\"")){
            let key = line.replace(/"/g,"").split(":")[0]
            if(!keys.includes(key)){
                keys.push(key)            
            }
        } 
    })
    return keys
}

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



.then(() => {
    for(let i = 0; i < file.length; i++){
        knex('pokemons').insert({id_pokemon : file[i].numéro, nom : file[i].nom, nomen : file[i].nomen }).then(() => {
            console.log(`${file[i].nom} added`)
        })
    }
})


// .then(() => {
//     const keys = getKeys()
//     let key = keys[0]
//     for(let i = 0; i < file.length - 1; i++){
//         knex('pokemons').insert({key: file[i].numéro, nom : file[i].nom }).then(() => {
//             console.log('worked')
//         })
//         for(let j = 0; j < file.length - 1; j++)
//             key = keys[j]
//             knex('pokemons').where({id_pokemon : i}).update({keys: file[i].numéro, nom : file[i].nom }).then(() => {
//                 console.log('worked')
//             })
//     }
// })