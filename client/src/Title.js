import React from "react"

function Title(props) {
    return (
    <div className="pokemon_card">
        <p>{props.id}</p>
        <h3>{props.name}</h3>
        <img src={props.imgUrl} alt = {props.name}/>
    </div>
    )
}

export default Title