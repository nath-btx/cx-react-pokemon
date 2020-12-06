const fs = require('fs')
const file = require('../../pokedex.json')
const knex = require('knex')({
    client :'pg',
	connection: {
		host : '127.0.0.1',
		user: 'postgres',
		password: 'trombone',
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


knex.schema.dropTableIfExists('pokemons').then(function(){
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
            console.log(`${file[i].nom} added`)
        })
        for(let j = 0; j < keys.length; j++){
            if (file[i][keys[j]] != undefined){
                knex('pokemons').where({numéro : file[i].numéro}).update({[keys[j]] : file[i][keys[j]]}).then(() =>{
                })
            }
        }
    }
})