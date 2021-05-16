import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ItemCount = ({sumar, restar, onAdd, itemSuma, disabledRestar, disabledSumar}) => {
    
    
    return (
        <React.Fragment>
            <div>
                <Button onClick={restar} disabledRestar={disabledRestar} variant="outline-primary" className="py-2 px-4 my-5">-</Button>
                <span className="mx-3 h3">{itemSuma}</span>
                <Button onClick={sumar} disabledSumar={disabledSumar} variant="outline-danger" className="py-2 px-4">+</Button>
            </div>
            <div className="mb-5">
                <Link to={'/cart'} onClick={()=> onAdd(itemSuma)}>Añadir al carro</Link>
            </div>
        </React.Fragment>
    )
}

export default ItemCount
