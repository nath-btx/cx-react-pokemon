import './App.css';
import PokemonCard from './casePokemon.js';
const knex = require('knex')({
  client :'pg',
connection: {
  host : '127.0.0.1',
  user: 'postgres',
  password: 'trombone',
  database: 'pokemon',
  }
})


function listPokemon() {
  knex('pokemons').select('numero', 'nom').then(function (data) {
      return data
  })
  }
  
  let data = listPokemon();

function App() {  
  return (
    <div className="App">
        <p> Lorem Ipsum </p>
        {
        for (let i = 0; i < data.length; i++) {
          nomPokemon = data[i].nom
        }
        <PokemonCard 
        name = {data[1].numéro}
        id =  {data[1].numéro}
        />
    </div>
  );
}



export default App;
