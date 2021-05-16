 
import React, { useState, useEffect, useContext } from 'react';
import Spinner from './spinner.gif'


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
        setTimeout(() => {
          setItems(true)
        }, 2000)
        setItems([])
    }




    return (
    <CartContext.Provider value={{ items, addItems, clear}}>
      {children}
    </CartContext.Provider>
  );

 
}