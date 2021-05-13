 
import React, { useState, useEffect, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export function CartProvider({ children }) {

    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      
    }, [items]);


    const addItems = (count, datos) => {
            setItems(datos)
            setTotalItems(count)
            
    }


    




    return (
    <CartContext.Provider value={{ items, totalItems, addItems}}>
      {children}
    </CartContext.Provider>
  );

 
}