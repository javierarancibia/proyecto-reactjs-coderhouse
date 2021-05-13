import React from 'react'
import {useCartContext} from './CartContext'

const Cart = () => {

    const {items, totalItems} = useCartContext()
    console.log(totalItems)
    

    return (
        <div className="mt-5">
            <p className="mt-5"> {items.desc}</p>
            <p className="mt-5"> {items.stock}</p>
            <p className="mt-5"> {totalItems}</p>

        </div>
    )
}

export default Cart