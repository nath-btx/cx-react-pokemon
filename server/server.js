const express = require('express')
const cors = require('cors')
const knex = require('knex')({
    client :'pg',
	connection: {
		host : '127.0.0.1',
		user: 'postgres',
		password: 'admin',
        database: 'pokemon',
    }
})
function run(port) {
  const app = express()
  app.use(cors())


  app.get('/', (req, res) => {
    knex.select('numéro','nom').from('pokemons').orderBy('numéro').then(data => {
      res.json(data)
  })
})
  


  app.get('/pokemons/:id', (req, res) => {
    knex.select('numéro','nom','couleur','espece','type1','taille','poids','forme','pokemon','nomen','nomde','nomtm','nomja','attaques').from('pokemons').where({numéro : req.params.id}).then(data => {
      res.json(data)
  })
})
  
  app.listen(port, () => {
    console.log(`✨ Server is listening on port ${port}`)
  })
}

/**
 * Entry point
 */
// ["node", "src/main.js", "4242"] -> ["4242"]
const args = [4242]
if (args.length !== 1) {
  console.log("Usage: node src/main.js <port>")
  process.exit(0)
}

const port = args[0]
run(parseInt(port, 10))
