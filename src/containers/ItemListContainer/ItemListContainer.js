import React, {useState, useEffect} from 'react'
import ItemList from './itemList'
import Spinner from './spinner.gif'

const ItemListContainer = () => {

    const [datos, setDatos] = useState([])

        useEffect(() => {

            const products = [
                {
                    img: './pintura1.jpg',
                    id: 1,
                    name: 'Grabado en Tela',
                    desc: 'Bello y colorido grabado efectuado sobre tela, intervenido a mano con lápiz y brillo glitter, titulado "Please Sweetheart". Año 2011. Medidas 50 x 40 cms. (tela).',
                    price: '$1.100.000',
                    stock: 6
                },
                {
                    img: './pintura2.jpg',
                    id: 2,
                    name: 'Grabado color "sin título" II',
                    desc: 'Bello grabado a color numerado y firmado a mano por el destacado maestro chileno Benito Rojo. Dimensiones: 55 x 65 cms. (papel).',
                    price: '$350.000',
                    stock: 8
                },
                {
                    img: './pintura3.jpg',
                    id: 3,
                    name: 'Grabado color "sin título" III',
                    desc: 'Extraordinario grabado a color numerado y firmado a mano por el destacado maestro chileno Benito Rojo. Dimensiones: 56 x 67,5 cms. (papel).',
                    price: '$350.000',
                    stock: 10
                },
                {
                    img: './pintura4.jpg',
                    id: 4,
                    name: 'Serigrafía color "Prelunio en el volcán',
                    desc: 'Extraordinaria serigrafía a color numerada y firmada a mano por el destacado artista cubano chileno, ganador del Premio Nacional de Artes Plásticas, Mario Carreño. Titulada "Prelunio en el volcán". Dimensiones: 75 x 55 cms. (papel).',
                    price: '$750.000',
                    stock: 15
                },
                {
                    img: './pintura5.jpg',
                    id: 5,
                    name: 'Aguafuerte a color "Sin título"',
                    desc: 'Hermosa aguafuerte a color firmada a mano por el destacado artista y profesor chileno Ernesto Banderas. Dimensiones: 24 x 21 cms. (papel) y con marco 53 x 50 cms.',
                    price: '$200.000',
                    stock: 22
                },
                {
                    img: './pintura6.jpg',
                    id: 6,
                    name: 'Grabado a color intervenido a mano en gran formato "Pan"',
                    desc: 'Representativo grabado a color intervenido a mano con lápiz pastel titulado "Pan". Firmado a mano por el destacado artista, galardonado con el Premio Nacional de Artes Plásticas, José Balmes Parramón. Año 2013. Dimensiones: 80 x 80 cms.',
                    price: '$850.000',
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
            <h1 className="mt-5"> Galeria Digital</h1>
            <div>
                {datos.length > 0 ? <ItemList productos={datos}/> : <img src={Spinner} />}
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer