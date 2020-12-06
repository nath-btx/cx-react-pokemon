import React from "react"
import pokedeximg from './pokedex.png'
import './pokedexImg.css'
function PokedexImg() {
    return (
        <div className = "Title">
            <img src={pokedeximg} alt="title pokdédex"/>

        </div>
    )
}

export default PokedexImg