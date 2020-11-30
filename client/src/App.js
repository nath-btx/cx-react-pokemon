import React, {Component} from "react"
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            json: null
        }
    }

async componentDidMount() {
    const response = await fetch('http://localhost:4242/pokemons')
    const data = await response.json()

    setTimeout(() => {
        this.setState({pokemon: data.name})
    }, 5000)
}

render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt='logo' />
                <p> 
                    Hello to Pokedex
                </p>
                <span style = {{color: "yellow"}}> JSON : {this.state.json || 'No Data'}</span>
            </header>
        </div>
    )
}
}

export default App