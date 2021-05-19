import React from 'react'
import Item from './item'
import { CardColumns } from 'react-bootstrap';

const itemList = ({productos}) => {
    console.log(productos)


    return (
        <CardColumns className="mx-5">
            {productos.map((data) => 
                <div key={data.key} >
                    <Item id={data.id} img={data.img} name={data.name} desc={data.desc} price={data.price} cantidad={data.stock} category={data.category} />
                </div>
            )}        
        </CardColumns>
    )
}

export default itemList


