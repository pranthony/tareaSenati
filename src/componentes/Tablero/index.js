import { useState } from "react"
import  Casilla  from "../Casilla"
import './styles.css'

const usePlayer = (initialState)=>{
    const [figure, setFigure] = useState(initialState)

    const tooglePlayer = ()=>{
        switch (figure) {
            case 1:
                setFigure(2)
                break;
            case 2:
                setFigure(1)
                break;
            default:
                setFigure(1)
                break;
        }
        console.log(figure+": figure")
    }
    return [figure, tooglePlayer]
}



const Tablero = ()=>{
    const items = ()=>{
        const spaces = []
        for(let i = 0; i<9;i++){

            spaces.push(
                <Casilla key={i} callback={tooglePlayer} player={player} />
            )
        
        }
        return spaces
    }
    const [player, tooglePlayer] = usePlayer(null)
    return(
        <div
        style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}
        className="tablero">
            {items()}
        </div>
    )
}

export default Tablero