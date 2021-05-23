import React from 'react'
import { Card } from 'react-bootstrap';
import {useParams, Link} from 'react-router-dom'



const ItemDetail = ({items}) => {
    console.log(items)

    const myStyle= {  
        height: 450,
        width: 'auto'
    
    }
    const {id} = useParams()

    return (
        
            <Card className="text-center">
                <Card.Header className="h3">{items.price}</Card.Header>
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                        {items.desc} - {items.category}
                    </Card.Text>
                    <Link to={"/"}>Volver a Inicio</Link>
                </Card.Body>
                <Card.Footer className="text-muted">Stock de unidades: {items.stock}</Card.Footer>
                <Card.Img src={items.img} style={myStyle} className="img-fluid mt-5 container" alt="imagen" />
            </Card>
    )
}

export default ItemDetail




            
