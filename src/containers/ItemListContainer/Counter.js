import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

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
            setTotalStock((prevStock) => prevStock - 1)
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
            <Button onClick={restar} disabledRestar={disabledRestar} variant="outline-primary" className="py-2 px-4">-</Button>
            <span className="mx-3 h3">{itemSuma}</span>
            <Button onClick={sumar} disabledSumar={disabledSumar} variant="outline-danger" className="py-2 px-4">+</Button>
        </div>
    )
}

export default Counter
