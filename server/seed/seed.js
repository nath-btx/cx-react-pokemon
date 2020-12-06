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
const keys = getKeys()

knex.schema.dropTableIfExists('pokemons', true).then(function(){
    return knex.schema.createTable('pokemons',function(t) {
        t.integer('numéro').primary()
        for(let i = 1; i<keys.length; i++){
            t.string(keys[i],300)
        }
    })
})
.then(() => {
    for(let i = 0; i < file.length; i++){
        knex('pokemons').insert({numéro : file[i].numéro, nom : file[i].nom, nomen : file[i].nomen }).then(() => {
            // console.log(`${file[i].nom} added`)
        })
        for(let j = 0; j < keys.length; j++){
            if (file[i][keys[j]] != undefined){
                knex('pokemons').where({numéro : file[i].numéro}).update({[keys[j]] : file[i][keys[j]]}).then(() =>{
                })
            }
        }
    }
})

let attacks =  []
knex.schema.dropTableIfExists('attaques', true).then(function(){
    return knex.schema.createTable('attaques',function(t) {
        t.increments("id_attaque").primary()
        t.string('nom', 100)
        t.string('puissance',100)
        t.string('precision',100)
        t.integer('pp')
    })
})
.then(() => {
    for(let i = 0; i< file.length;i++){
        for(let j = 0; j < file[i].attaques.length; j ++){
            let attack = file[i].attaques[j]
            if(!attacks.includes(attack.nom)){
                attacks.push(attack.nom)    
                knex('attaques').insert({nom : attack.nom, puissance : attack.puissance, precision : attack.puissance, pp : attack.pp}).then(() => {
                    // console.log(`Attaque : ${attack.nom} added to the pokedex database`)
                })
            }
        }
}
})

knex.schema.dropTableIfExists('hasattack', true).then(function(){
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
            // console.log(`pokemon ${file[i].nom} attack : ${file[i].attaques[j].nom}`)
            })
            }    
        }
    })