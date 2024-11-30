import { useState } from 'react'
import '../EstilosComponentes/Botones.css'

const BotonesCantidad = () => {

    const [count, setCount] = useState(0);

    const incrementarCantidad = () => {
        setCount((count) => count + 1)
    }

    const disminuirCantidad = () => {
        count !== 0 ? setCount((count) => count - 1) : null
    }

    return(
        <>
            <p>
                Cantidad: <span className='cantidadArticulos'>{count}</span> 
            </p>
            <div className='btnCantidad'>
                <button onClick={disminuirCantidad}>-</button>
                <button onClick={incrementarCantidad}>+</button>
            </div>
        </>
    )
}

export default BotonesCantidad