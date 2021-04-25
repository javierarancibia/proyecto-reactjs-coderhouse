import React, {useState, useEffect} from 'react'
import ItemList from './itemList'
import Spinner from './spinner.gif'

const ItemListContainer = () => {

    const [datos, setDatos] = useState([])

        useEffect(() => {

            const products = [
                {
                    img: './goku.png',
                    id: 1,
                    name: 'Zapatillas',
                    desc: 'Bacon ipsum dolor amet sausage burgdoggen rump cow, turkey meatball jowl boudin biltong pig. Rump pork loin spare ribs picanha tongue pork shankle short loin venison. Pastrami picanha boudin beef tongue shank shankle capicola burgdoggen swine ground round frankfurter andouille prosciutto. Salami pancetta ham porchetta jerky.',
                    price: '$5.000',
                    stock: 6
                },
                {
                    img: './fondo_sm.png',
                    id: 2,
                    name: 'Pantalones',
                    desc: 'Kevin frankfurter ham pork chop meatloaf. Hamburger bacon pastrami pork swine meatloaf. Venison ball tip brisket t-bone, bresaola boudin buffalo turducken short ribs. Kevin boudin pig, brisket venison andouille strip steak landjaeger ham hock cow frankfurter. Hamburger meatloaf pastrami, tenderloin prosciutto kevin pig porchetta drumstick chicken.',
                    price: '$5.000',
                    stock: 8
                },
                {
                    img: './fondo_sm.png',
                    id: 3,
                    name: 'Sweaters',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 10
                },
                {
                    img: './fondo_sm.png',
                    id: 4,
                    name: 'Camisas',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 15
                },
                {
                    img: './fondo_sm.png',
                    id: 5,
                    name: 'Zapatos',
                    desc: 'Lorem ipsum',
                    price: '$5.000',
                    stock: 22
                },
                {
                    img: './fondo_sm.png',
                    id: 6,
                    name: 'Sombreros',
                    desc: 'Kevin frankfurter ham pork chop meatloaf. Hamburger bacon pastrami pork swine meatloaf. Venison ball tip brisket t-bone, bresaola boudin buffalo turducken short ribs. Kevin boudin pig, brisket venison andouille strip steak landjaeger ham hock cow frankfurter. Hamburger meatloaf pastrami, tenderloin prosciutto kevin pig porchetta drumstick chicken.',
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