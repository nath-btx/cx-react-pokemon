import React from "react"
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
knex('pokemons').select('numero').then(function (data) {
    return data
})
}

let data = listPokemon();

function PokemonCard(props) {
    return (
        <div className="pokemon_card">
            <img src={props.imgUrl}/>
            <p>{props.id}</p>
            <h3>{props.name}</h3>
        </div>
    )
}
export default PokemonCard