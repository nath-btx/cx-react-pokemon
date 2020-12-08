import React from 'react'

function SinglePokemon (props){
    let attaques =[]
    let url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+props.pokemon_info.numéro+".png"
    let pokemon_has_attack = false
    if(props.pokemon_info.attaques){
        pokemon_has_attack = true
        console.log(Object.values(props.pokemon_info.attaques))
        attaques = Object.values(props.pokemon_info.attaques)
    }
    else return(
        <p>Please Wait attacks are still getting fetched</p>
    )
    return( 
        <div>
        <table >
                <tr>
                    <th>
                        Identité
                     </th>
                     <th>
                        #{props.pokemon_info.numéro}
                    </th>
                    <th>
                        {props.pokemon_info.nom}
                    </th>
                    <th>
                        <img src = {url} alt ="pokemon"></img>
                    </th>
                </tr>
                <tr>
                    <td>Couleur</td><td>{props.pokemon_info.couleur}</td>
                    <td>Pokémon</td><td>{props.pokemon_info.nom}</td>
                </tr>
                <tr>
                    <td>Espece</td><td>{props.pokemon_info.espece}</td>
                    <td>Nom FR</td><td>{props.pokemon_info.nom}</td>
                </tr>
                <tr>
                    <td>Type1</td><td>{props.pokemon_info.type1}</td>
                    <td>Nom EN</td><td>{props.pokemon_info.nomen}</td>
                </tr>
                <tr>
                    <td>Taille</td><td>{props.pokemon_info.taille}</td>
                    <td>Nom DE</td><td>{props.pokemon_info.nomde}</td>
                </tr>
                <tr>
                    <td>Poids</td><td>{props.pokemon_info.poids}</td>
                    <td>Nom TM</td><td>{props.pokemon_info.nomtm}</td>
                </tr>
                <tr>
                    <td>Forme</td><td>{props.pokemon_info.forme}</td>
                    <td>Nom JA</td><td>{props.pokemon_info.nomja}</td>
                </tr>
                <tr>
                    <td colspan ='4'></td>
                </tr>
                <tr>
                    <td colspan ='4'><h3>Attaques</h3></td>
                </tr>
        </table>
                {attaques.map((attaque, index)=> {
                    return(
                        <dl>
                            <dt>Nom : {props.pokemon_info.attaques[index].nom}</dt>
                            <dd>Niveau : {props.pokemon_info.attaques[index].niveau}</dd>
                            <dd>Puissance : {props.pokemon_info.attaques[index].puissance}</dd>
                            <dd>Précision : {props.pokemon_info.attaques[index].precision}</dd>
                            <dd>PP Max : {props.pokemon_info.attaques[index].pp}</dd>
                        </dl>
                    )
                })}
            

        </div>

    )
}


export default SinglePokemon