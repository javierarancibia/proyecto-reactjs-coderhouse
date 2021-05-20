import React, { useState} from 'react'
import {useCartContext} from './CartContext'
import { Table, Button } from 'react-bootstrap'

const Cart = () => {

    const {items, clear, precioFinal, deleteItem} = useCartContext()
    

    const myStyle = {
        cursor:'pointer'
    }

     console.log(items)

    return (


        <React.Fragment>
            { 
                !items.length > 0 ? (<h2 data-aos="fade-right" data-aos-easing="ease-in-out">Carrito vacio</h2>) : 
                (<Table striped bordered hover className="container mt-5" data-aos="fade-right" data-aos-easing="ease-in-out">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Descripcion</th>
                        <th>Articulo</th>
                        <th>Precio Unidad</th>
                        <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(x => 
                        <tr key={x.id}>
                            <td><Button onClick={() => deleteItem(x.id)}>Borrar Item</Button></td>
                            <td>{x.desc}</td>
                            <td>{x.name}</td>
                            <td>{x.price}</td>
                            <td>{x.quantity}</td>
                        </tr>
                        )}
                    </tbody>
                    <h2>Precio final: ${ precioFinal()}</h2>
                    <Button onClick={() => clear()} style={myStyle}>Vaciar Carrito</Button>
                </Table>)
            }

        </React.Fragment>
    )
}

export default Cart