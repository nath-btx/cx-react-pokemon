import React from "react"
import ReactDOM from "react-dom"
import './style.css'

import App from "./components/App"
class App extends React.Component{
    render(){
        return (
            <div><p> Bonjour</p></div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"))