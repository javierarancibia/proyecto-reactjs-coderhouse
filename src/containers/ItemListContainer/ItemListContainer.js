import React, {useState, useEffect} from 'react'
import ItemList from './itemList'
import Spinner from './spinner.gif'

const ItemListContainer = () => {

    const [datos, setDatos] = useState([])

        useEffect(() => {

            const products = [
                {
                    img: './fondo_sm.png',
                    id: 1,
                    name: 'Zapatillas',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 6
                },
                {
                    img: '../containers/assets/fondo_sm.png',
                    id: 2,
                    name: 'Pantalones',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 8
                },
                {
                    img: '',
                    id: 3,
                    name: 'Sweaters',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 10
                },
                {
                    img: '',
                    id: 4,
                    name: 'Camisas',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 15
                },
                {
                    img: '',
                    id: 5,
                    name: 'Zapatos',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 22
                },
                {
                    img: '',
                    id: 6,
                    name: 'Sombreros',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 12
                }
            ]
            
            const list = new Promise((resolve, reject) => {
                setTimeout(() =>{
                    resolve(products)
                }, 1000)
            })
            
            list.then((res) => {
                setDatos(res)
            })

            .catch((error) => {
                console.log(`Hubo un error ${error}`)
            })
                        
        }, [])

    return (

        <React.Fragment>
            <h1 className="mt-5"> Bienvenidos Coders</h1>
            <div>
                {datos.length > 0 ? <ItemList productos={datos}/> : <img src={Spinner} />}
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer