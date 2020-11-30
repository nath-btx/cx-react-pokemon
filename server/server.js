const express = require('express')
const knex = require('knex')
const port = process.env.PORT || 5454;

const app = express();


// app.use(express.static('C:/Users/Nathan/git' + '/cx-react-pokemon_old'))

app.get('/', (req, res) => {
    // res.send('Welcome to our APIs')

    res.sendFile('C:/Users/Nathan/git/cx-react-pokemon_old/client/public/index.html',(err) => {
        if (err) console.log('Erreur')
    })
});

// app.get('/pokemons', (req, res) => {
//     res.write('Route pokemons')
//     res.end()
// })

// app.get('/pokemons/:id', (req, res) => {
//     const {id} = req.paramsres.send('<h1>Pokemon #£{id}<h1>')
// })

app.listen(port, () => {
    console.log('Server app listening on port ' + port)
})
