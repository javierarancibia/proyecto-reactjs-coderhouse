 
import React, { useState, useEffect, useContext } from 'react';
import Spinner from './spinner.gif'


export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export function CartProvider({ children }) {


    
    const [items, setItems] = useState([]);
    const [totalUnidades, setTotalUnidades] = useState([]);
    
    
    
    const inCart = (id) => {
      const alreadyInCart = items.some(x=> x.id === id)
      return alreadyInCart
    }

        
    
      const addItems = (count, objeto) => {
        if (inCart(objeto.id)){

            const existingIndex = items.findIndex (x=> x.id === objeto.id)
            items[existingIndex].quantity += count   
            setTotalUnidades(cantidadUnidades + items[existingIndex].quantity)
            
        } else {
  
            setItems([...items, {...objeto, quantity: count}])
            setTotalUnidades(cantidadUnidades)
            console.log(items)
          }      
        }  
          
       
      
      const clear = () => {
        setItems([])
      }
      
      const cantidadUnidades = () => {
        console.log(items)
        const unidades = items.reduce((a,b)=> (a + b.quantity), 0)
        return unidades
      }

      const precioFinal = () => {
          const total = items.reduce((a, b) => (a + (b.price * b.quantity)), 0)
          return total
      }

      const deleteItem = (id) => {
        setItems(items.filter((x)=>x.id !== id))
        console.log(items)
      }

             
        
      
    return (
    <CartContext.Provider value={{ items, addItems, clear, totalUnidades, cantidadUnidades, precioFinal, deleteItem}}>
      {children}
    </CartContext.Provider>
  );

 
}