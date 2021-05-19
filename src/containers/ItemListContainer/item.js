import React from 'react'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const item = ({img, cantidad, name, desc, price, id, category}) => {

    return (

            <Card className="mt-5">
                <Card.Body>
                    <Link key={id} to={`/item/${id}`} >
                        <Card.Img className="img-fluid mt-5" src={img} style={{height: 250}} alt="imagen"/>
                        <Card.Title> {name} - {category} </Card.Title>
                        <Card.Text> {desc} </Card.Text>
                        <Card.Text> {price} </Card.Text>
                    </Link>
                </Card.Body>
            </Card>
    )
}


export default item

