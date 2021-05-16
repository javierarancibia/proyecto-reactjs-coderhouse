 
import React, { useState, useEffect, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export function CartProvider({ children }) {

    const [items, setItems] = useState([]);
  
    useEffect(() => {
      
    }, [items]);


    const addItems = (count, datos) => {
        setItems([{...items, ...datos, quantity: count}])
            
            
    }  

    const clear = () => {
        setItems([])
    }




    return (
    <CartContext.Provider value={{ items, addItems, clear}}>
      {children}
    </CartContext.Provider>
  );

 
}