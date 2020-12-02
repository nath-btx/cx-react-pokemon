const express = require('express')
const cors = require('cors')
const path = require('path')
const knex = require('knex')

const port = process.env.PORT || 5454;

console.log("dirname = " + __dirname);


const app = express();
app.use(cors())

app.use(express.static(__dirname));


app.get('/', (req, res) => {
    // res.send("<h1>coucou<h1>")
    // res.sendFile('../client/public/index.html', { root: __dirname});
    res.sendFile(path.resolve('../client/public/index.html'), (err) => {
        if (err) console.log("Erreur")
    });


    // res.sendFile(path.join("C:/Users/Nathan/git/cx-react-pokemon" + "/client/public/index.html"),(err) => {
    //     if (err) console.log('Erreur')
    // })
});

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
