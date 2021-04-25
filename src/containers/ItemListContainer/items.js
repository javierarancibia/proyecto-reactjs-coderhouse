import React from 'react'
import { Card } from 'react-bootstrap';
import Counter from './Counter'

const items = ({img, cantidad, name, desc, price}) => {

       
    return (

            <Card className="mt-5">
                <Card.Img className="img-fluid mt-5" src={img} style={{height: 450}} alt="imagen"/>
                <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Text> {desc} </Card.Text>
                <Card.Text> {price} </Card.Text>
                <Card.Text> <Counter stock={cantidad}/> </Card.Text>
                </Card.Body>
            </Card>
    )
}


export default items

