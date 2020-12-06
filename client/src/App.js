import './App.css';
import PokemonCard from './casePokemon.js';
import PokedexImg from './pokedexImg.js';
import Title from './Title.js'



function App() {  
  return (
    <div className="App">
          <PokedexImg />
          <PokemonCard 
            name = {"Bulbizarre"}
            id = {"#001"}
            imgUrl = {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"}
          />
          <PokemonCard 
            name = {"Herbizarre"}
            id = {"#002"}
            imgUrl = {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"}
          />
          <PokemonCard 
            name = {"Florizarre"}
            id = {"#003"}
            imgUrl = {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"}
          />
          <PokemonCard 
            name = {"Salamèche"}
            id = {"#004"}
            imgUrl = {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"}
          />
          <PokemonCard 
            name = {"Reptincel"}
            id = {"#005"}
            imgUrl = {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"}
          />
          <PokemonCard 
            name = {"Dracaufeu"}
            id = {"#006"}
            imgUrl = {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"}
          />
      
    </div>
  );
}

export default App;
