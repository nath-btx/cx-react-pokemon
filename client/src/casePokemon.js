import React from "react"
import "./casePokemon.css"
 

function PokemonCard(props) {
    return (
            
        <div className="pokemon_card" >
            
            <img src={props.imgUrl} alt = {props.name}/>                
            <p>#{props.id}</p>
            <h3>{props.name}</h3>
        </div>

    )
}

export default PokemonCard