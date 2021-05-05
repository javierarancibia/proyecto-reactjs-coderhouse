import React from 'react'
import Category from './Category'
import { CardColumns } from 'react-bootstrap';

const CategoryDetail = ({datos}) => {
    return (
        <CardColumns className="mx-5">
            {datos.map((data) => 
                <div >
                    <Category id={data.id} img={data.img} name={data.name} desc={data.desc} price={data.price} cantidad={data.stock} category={data.category} />
                </div>
            )}        
        </CardColumns>
    )
}


export default CategoryDetail
