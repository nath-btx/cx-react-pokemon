const express = require('express')
const cors = require('cors')
const path = require('path')
const knex = require('knex')
const app = express();

const port = process.env.PORT || 5454;

app.use(cors())
app.use(express.static('../client_old'))


// app.get('/pokemons', (req, res) => {
//     res.write('Route pokemons')
//     res.end()
// })

// app.get('/pokemons/:id', (req, res) => {
//     const {id} = req.paramsres.send('<h1>Pokemon #{id}<h1>')
// })

app.listen(port, () => {
    console.log('Server app listening on port ' + port)
})

app.get('/', function(req, res){
    res.sendFile(path.resolve('../client_old/public/index.html'), (err) => {
        if (err) console.log("Erreur")
    });
})

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
