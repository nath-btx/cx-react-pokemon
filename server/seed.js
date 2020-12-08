
const fs = require('fs')
const path = require('path')
const pokedexPathName = path.join(process.cwd(),'data','pokedex.json')
const data = fs.readFileSync(pokedexPathName, 'utf-8')
const pokemons = JSON.parse(data)

const knex = require('knex')({
    client :'pg',
	connection: {
		host : '127.0.0.1',
		user: 'postgres',
		password: 'admin',
        database: 'pokemon',
    }
})

const attributes = []
pokemons.forEach((current) => {
  Object.keys(current).forEach((key) => {
    const index = attributes.findIndex(attr => attr === key)
    
    if (index === -1) {
      attributes.push(key)
    }
  })
  
})

knex.schema.dropTableIfExists('pokemons', true).then(function(){
    return knex.schema.createTable('pokemons',function(t) {
        attributes.forEach(fieldName => {
            if (fieldName === 'attaques') {
              t.json('attaques').nullable()
            } else {
              t.string(fieldName, 500).nullable()
            }
          })
    })
})
.then(() => {

    const formattedPokemons = pokemons.map(current => {
      current.attaques = JSON.stringify(current.attaques)

      return current
    })

    knex.batchInsert('pokemons', formattedPokemons, 100).then(() => {
      console.log(`🦄 Pokemon successfully saved`)
      knex.destroy
      process.exit(0)
    })
  })


// let attacks =  []
// knex.schema.dropTableIfExists('attaques', true).then(function(){
//     return knex.schema.createTable('attaques',function(t) {
//         t.increments("id_attaque").primary()
//         t.string('nom', 100)
//         t.string('puissance',100)
//         t.string('precision',100)
//         t.integer('pp')
//     })
// })
// .then(() => {
//     for(let i = 0; i< file.length;i++){
//         for(let j = 0; j < file[i].attaques.length; j ++){
//             let attack = file[i].attaques[j]
//             if(!attacks.includes(attack.nom)){
//                 attacks.push(attack.nom)    
//                 knex('attaques').insert({nom : attack.nom, puissance : attack.puissance, precision : attack.puissance, pp : attack.pp}).then(() => {
//                     // console.log(`Attaque : ${attack.nom} added to the pokedex database`)
//                 })
//             }
//         }
// }
// })

// knex.schema.dropTableIfExists('hasattack', true).then(function(){
//     return knex.schema.createTable('hasattack', function(t) {
//         t.increments().primary()
//         t.integer('numéro')
//         t.foreign('numéro').references('pokemons.numéro')
//         t.string('pokemon_name', 100)
//         t.integer('attack_id')
//         t.foreign('attack_id').references('id_attaque')
//         t.string('attack_name', 100)
//     })
// })
// .then(() => {
//     let c = 0
//     for(let i = 0; i< file.length;i++){
//         for(let j = 0; j < file[i].attaques.length; j ++){
//             knex('hasattack').insert({
//                 numéro : file[i].numéro,
//                 pokemon_name : file[i].nom,
//                 attack_name : file[i].attaques[j].nom,
//                 attack_id : knex('attaques').where({nom : file[i].attaques[j].nom}).select('id_attaque')
//             })
//                 .then(function() {
//             // console.log(`pokemon ${file[i].nom} attack : ${file[i].attaques[j].nom}`)
//             })
//             }    
//         }
//     })