import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'; 




const CartWidget = () => {
    const CartStyle = {
        color:'white',
        fontSize: 55, 
        marginTop: 5,
        marginRight: 20
    }

        
    return (
        <div>
            <ShoppingCart style={CartStyle}/>
        </div>
    )
}

export default CartWidget
