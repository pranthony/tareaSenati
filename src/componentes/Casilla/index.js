import { useState } from "react"

const Casilla = (props)=>{
    const {player, callback } = props
    const [content, setContent] = useState(1)
    const _handlerClick = ()=>{
        setContent(player)
        callback()
        console.log(player)
    }
    return(
        <div
        style={{cursor:"pointer", border:"1px solid"}}
        className="casilla" onClick={_handlerClick}>
            <p>{content}</p>
        </div>
    )
}

export default Casilla