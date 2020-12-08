import React, {Component} from 'react'
import './App.css'
import './OnePokemon.css'
import SinglePokemon from './SinglePokemon';
import { HashRouter as Router, Link } from 'react-router-dom';

class OnePokemon extends Component{
    constructor(props) {
        super(props)
        this.state = {
            attribute : [],
        }
      }

      getOnePokemon() { 
          let url = window.location.href
          let fetchUrl = 'http://localhost:4242/pokemons/'+url.substring(url.length-3)
          console.log(fetchUrl)
        fetch(fetchUrl)
        .then(response => {
            response.json().then(value => {
                value.forEach(valeur => {
                    this.setState({
                        attribute : valeur
                    })
                })        
          })
        })
      }

componentDidMount(){
    this.getOnePokemon()
}

render(){
    if(this.state.attribute === null){
        return <div class = "clef"> Pokemon hasn't loaded yet</div>
    }
    else{
        // console.log(this.state.attribute)
        return(
            <div className="App">
                <Router>
                    <Link to='/'>
                        <img src = "\pokedex.png" alt ="Title"/>
                    </Link>
                </Router>
                <div id ="attributs">
                    <SinglePokemon
                    pokemon_info = {this.state.attribute}
                    />
                </div>
            </div>   
        )
}
}
}


export default OnePokemon