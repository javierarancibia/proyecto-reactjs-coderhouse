import React, { useState} from 'react'
import {useCartContext} from './CartContext'
import { Table } from 'react-bootstrap'

const Cart = () => {

    const {items, clear} = useCartContext()
    console.log(items)

    const myStyle = {
        cursor:'pointer'
    }

     

    return (


        <React.Fragment>
            { 
                !items.length > 0 ? (<h2 data-aos="fade-right" data-aos-easing="ease-in-out">Carrito vacio</h2>) : 
                (<Table striped bordered hover className="container mt-5" data-aos="fade-right" data-aos-easing="ease-in-out">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Articulo</th>
                        <th>Precio Unidad</th>
                        <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td onClick={() => clear(items)} style={myStyle}>X</td>
                        <td> { items[0].name }</td>
                        <td>{ items[0].price }</td>
                        <td>{ items[0].quantity }</td>
                        </tr>
                    </tbody>
                </Table>)
            }

        </React.Fragment>
    )
}

export default Cart