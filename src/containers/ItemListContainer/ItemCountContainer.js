import React, {useState} from 'react'
import ItemCount from './ItemCount'
// import {useCartContext} from '../Context/CartContext'


const ItemCountContainer = ({items, onAdd}) => {

        const [totalStock, setTotalStock] = useState(items.stock)
        const [itemSuma, setItemSuma] = useState(1)
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
            <ItemCount onAdd={onAdd} restar={restar} sumar={sumar} itemSuma={itemSuma} totalStock={totalStock} disabledRestar={disabledRestar} disabledSumar={disabledSumar} />
        </div>
    )
}

export default ItemCountContainer
