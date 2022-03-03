import { useEffect, useState } from "react"
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
                
                setFigure(2)
                break;
        }
       
    }
    return [figure, tooglePlayer]
}

const casos = array=>
(array[0][0]===array[1][1] && array[0][0]===array[2][2] && array[0][0]!==null) ||
(array[0][2]===array[1][1] && array[0][2]===array[2][0] && array[0][2]!==null) ||

(array[0][0]===array[1][0] && array[0][0]===array[2][0] && array[0][0]!==null) ||
(array[0][1]===array[1][1] && array[0][1]===array[2][1] && array[0][1]!==null) ||
(array[0][2]===array[1][2] && array[0][2]===array[2][2] && array[0][2]!==null) ||



(array[0][0]===array[0][1] && array[0][0]===array[0][2] && array[0][0]!==null) ||
(array[1][0]===array[1][1] && array[1][0]===array[1][2] && array[1][0]!==null) ||
(array[2][0]===array[2][1] && array[2][0]===array[2][2] && array[2][0]!==null) 



const Tablero = ()=>{
    const [player, tooglePlayer] = usePlayer(1)
    const [stateCasillas, setStateCasillas]=useState([[null, null, null],
                                                       [null, null, null],
                                                    [null, null, null] ])
    
    const [gameState, setGameState] =useState("en curso")
    const callback=(e)=>{
        
        
        if (gameState==="en curso"){
            console.log(e)
            
            const casillaNumero = e.target.id.split("-")
            const prevStateCasillas = stateCasillas
            prevStateCasillas[casillaNumero[0]][casillaNumero[1]] = player
            if (casos(prevStateCasillas)){setGameState("El ganador es el jugador "+ player)}
            let flag= true
            prevStateCasillas.forEach(e=>e.forEach(e=>flag =flag && e))
            if(flag) {setGameState("Empate")} 
            console.log("la bandera es" + flag)
            setStateCasillas([...prevStateCasillas])
            tooglePlayer() 
        }
    }
    useEffect(()=>{
        console.log("player"+player)
    }, [player])
    
    const items = ()=>{
        const spaces = []
        for(let i = 0; i<9;i++){

            spaces.push(
                <Casilla key={i} id={`${Math.floor(i/3)}-${i%3}`} callback={callback} player={player} gameState={gameState}/>
            )
        
        }
        return spaces
    }
    
    return(
        <>
        <div
        style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}
        className="tablero">
            {items()}
        </div>
        <p>{gameState}</p>
        </>
    )
}

export default Tablero