import React, {useState, useEffect} from 'react'
import ItemList from './itemList'
import Spinner from './spinner.gif'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase'

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams();

        useEffect(() => {

                setLoading(true)
                const db = getFirestore();
                const itemsCollection = db.collection("items");

                if (typeof categoryId == 'undefined') {
                       
                    itemsCollection.get()
                    .then((querySnapShot) => {
                        querySnapShot.size === 0 && alert("No hay items") 
                        const documentos = querySnapShot.docs.map((doc) => {
                            return {
                                id: doc.id,
                                ...doc.data()
                            }}
                            )                        
                            
                            setItems(documentos)
                        })
                        .catch((err) => console.log(err))
                        .finally(() => setLoading(false))
                        
                } else  { 
                    itemsCollection.where('categoryId', '==', categoryId).get()
                    .then((querySnapShot) => {
                        querySnapShot.size === 0 && alert("No hay items") 
                        const documentos = querySnapShot.docs.map((doc) => {
                            return {
                                id: doc.id,
                                ...doc.data()
                            }}
                            )                        
                            
                            setItems(documentos)
                        })
                        .catch((err) => console.log(err))
                        .finally(() => setLoading(false))
                }
                    
            }
                        
        , [items])




        useEffect(() => {
            items.length && setLoading(false);
        }, [items])

    return (

        <React.Fragment>
            <h1 className="mt-5"> Galeria Digital</h1>
            <div>
                {items.length > 0 ? <ItemList key={items.id} productos={items}/> : <img src={Spinner} />}
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer