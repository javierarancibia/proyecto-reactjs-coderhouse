import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {useParams, Link} from 'react-router-dom'


const ItemDetail = ({datos}) => {

    const myStyle= {  
        marginTop: "50rem"
    
    }
    const {id} = useParams()

    return (
        
            <Card className="text-center">
                <Card.Header className="h3">{datos.price}</Card.Header>
                <Card.Body>
                    <Card.Title>{datos.name}</Card.Title>
                    <Card.Text>
                        {datos.desc}
                    </Card.Text>
                    <Link to={"/"}>Volver a Inicio</Link>
                </Card.Body>
                <Card.Footer className="text-muted">Stock de unidades: {datos.stock}</Card.Footer>
                <Card.Img src={datos.img} className="img-fluid mt-5 container" alt="imagen" />
            </Card>
    )
}

export default ItemDetail




            
