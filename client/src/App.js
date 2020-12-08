import React, {Component} from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import PokemonCard from './casePokemon';
import OnePokemon from './OnePokemon'

class App extends Component {

  render() {
      return (
        <Router>
          <Switch>
            <Route exact path = "/"component = {ManyPokemons}></Route>
            <Route component={OnePokemon}></Route>
          </Switch>
        </Router>
      )
  }
}

class ManyPokemons extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      lien: [],
      noms:[],
      numéros:[],
      link:[],
    }
  }
  getAllPokemons() {
    fetch('http://localhost:4242').then(response => {
      response.json().then(data => {
        Object.keys(data).forEach(pokemon => {
          this.setState({
            lien : [...this.state.lien, "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+data[pokemon].numéro+".png"],
            noms : [...this.state.noms, data[pokemon].nom],
            numéros: [...this.state.numéros, data[pokemon].numéro],
            link :[...this.state.link, "/pokemons/" + data[pokemon].numéro]
          })
        });
      })
    })
  }
  componentDidMount() {
    this.getAllPokemons()
  }

  render(){
    return( 
      <div className="App">
          <Router>
            <Link to='/'>
          <img src = "\pokedex.png" alt ="Title"/>
            </Link>
          </Router>
          <header className="App-header">
            {
            this.state.lien.map((pokemon, index) => {
              return (
                    <Link to={this.state.link[index]}>
                      <PokemonCard
                        name = {this.state.noms[index]}
                        id = {this.state.numéros[index]}
                        imgUrl = {pokemon} 
                      />
                    </Link>
              )
            })
            }
          </header>
        </div>
    )
  }
}
export default App;

