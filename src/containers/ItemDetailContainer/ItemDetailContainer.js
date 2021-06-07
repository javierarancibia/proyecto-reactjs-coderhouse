import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import ItemCountContainer from '../ItemListContainer/ItemCountContainer'
import {useCartContext} from '../context/CartContext'
import Spinner from './spinner.gif'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase'

const ItemDetailContainer = () => {


    const [items, setItems] = useState([])
    const {addItems} = useCartContext()
    const { itemId } = useParams();
    const [loading, setLoading] = useState(false)


        useEffect(() => {
            setTimeout(() =>{
                setLoading(true)
            }, 1000)

            
            const db = getFirestore();
            
            const itemCollection = db.collection("items");
            const item = itemCollection.doc(itemId)
            
            item.get().then((doc)=>{
                if (!doc.exists) {
                    console.log("Item no existe")
                    return;
                }  
                setItems({ id: doc.id, stock: doc.stock - items.quantity,...doc.data() });
                console.log(items)
            })
            .catch((err)=>{console.log("error:", err)})
            

            
            
        }, [])
        
        const onAdd = (totalStock) => {
            addItems(totalStock, items)
    
        }
        
        return ( 
            <React.Fragment>
                <div>
                    { loading ? <div><ItemDetail items={items}/><ItemCountContainer items={items} onAdd={onAdd} /></div> : <img src={Spinner} />}
                </div> 
            </React.Fragment>

        )
}

    
export default ItemDetailContainer

   
                   




    




