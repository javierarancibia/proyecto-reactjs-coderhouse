import React from 'react'
import Items from './items'
import { CardColumns } from 'react-bootstrap';

const itemList = ({productos}) => {


    return (
        <CardColumns className="mx-5">
            {productos.map((data) => 
                <div key={data.id}>
                    <Items img={data.img} name={data.name} desc={data.desc} price={data.price} cantidad={data.stock}/>
                </div>
            )}        
        </CardColumns>
    )
}

export default itemList


