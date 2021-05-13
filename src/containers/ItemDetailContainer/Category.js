import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemListContainer/ItemCount'


const Category = ({id, category, name, img, cantidad, desc, price}) => {
    return (
        <Card className="mt-5">
            <Card.Body>
                <Link key={id} to={`item/${id}`} >
                    <Card.Img className="img-fluid mt-5" src={img} style={{height: 450}} alt="imagen"/>
                    <Card.Title> {name} - {category} </Card.Title>
                    <Card.Text> {desc} </Card.Text>
                    <Card.Text> {price} </Card.Text>
                    <Card.Text> <ItemCount stock={cantidad}/> </Card.Text>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Category
