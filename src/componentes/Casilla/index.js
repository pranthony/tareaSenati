import { useState } from "react"

const Casilla = (props)=>{
    const {callback, player,id, gameState } = props
    const [jugador, setJugador]=useState(null)

    const _handlerClick = (e)=>{
        if (!jugador && gameState==="en curso"){
        setJugador(player===1? "x": "o")
        callback(e)
        }
    }
    return(
        <div id={id}
        style={{cursor:"pointer", border:"1px solid",height:80}}
        className="casilla" onClick={_handlerClick}>
            <p>{jugador}</p>
        </div>
    )
}

//Usar usme y with meme par ano re renderizar las casillas


export default Casilla