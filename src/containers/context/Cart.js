import React, { useState} from 'react'
import {useCartContext} from './CartContext'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {items, clear, precioFinal, deleteItem} = useCartContext()
    

    const myStyle = {
        cursor:'pointer'
    }

     console.log(items)

    return (


        <React.Fragment>
            { 
                !items.length > 0 ? (<Link to={'/'}><h2 data-aos="fade-right" data-aos-easing="ease-in-out">Carrito vacio - Ir a pagina principal</h2></Link>) : 
                (<Table striped bordered hover className="container mt-5" data-aos="fade-right" data-aos-easing="ease-in-out">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Descripcion</th>
                        <th>Articulo</th>
                        <th>Precio Unidad</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
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
                            <td>{x.quantity * x.price}</td>
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