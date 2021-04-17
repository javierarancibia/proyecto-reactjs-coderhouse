import React from 'react'



const CartWidget = () => {
    const CartStyle = {
        color:'white',
        fontSize:20, 
        marginTop: 5

    }

    return (
        <div>
            <h2 style= {CartStyle} className="mr-5">Carrito de Compras</h2>
        </div>
    )
}

export default CartWidget
