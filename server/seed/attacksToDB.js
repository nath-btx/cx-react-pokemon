const knex = require('knex')({
    client :'pg',
	connection: {
		host : '127.0.0.1',
		user: 'postgres',
		password: 'admin',
        database: 'pokemon',
    }
})
const file = require('./pokedex.json')
let attacks =  []
knex.schema.dropTableIfExists('attaques').then(function(){
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
                    console.log(`Attaque : ${attack.nom} added to the pokedex database`)
                })
            }
        }
}
})