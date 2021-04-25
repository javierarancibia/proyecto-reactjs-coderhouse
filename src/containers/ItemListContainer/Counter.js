import React, {useState} from 'react'

const Counter = ({stock}) => {
    console.log(stock)
    const [totalStock, setTotalStock] = useState(stock)
    const [itemSuma, setItemSuma] = useState(0)
    const [disabledRestar, setDisabledRestar] = useState(false)
    const [disabledSumar, setDisabledSumar] = useState(false)
    
    const sumar = () => {
        if (totalStock === 0) {
            setDisabledSumar(true)
        } else {
            setTotalStock(totalStock - 1)
            setItemSuma(itemSuma + 1)
        }
    }

    
    
    const restar = () => {
        if (itemSuma === 0) {
            setDisabledRestar(true)
        } else {
            setTotalStock(totalStock + 1)
            setItemSuma(itemSuma - 1)
        }
    }

    return (
        <div>
            <button onClick={restar} disabledRestar={disabledRestar}>-</button>
            <p>{itemSuma}</p>
            <button onClick={sumar} disabledSumar={disabledSumar}>+</button>
        </div>
    )
}

export default Counter
