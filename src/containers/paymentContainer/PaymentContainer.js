import React, { Fragment, useState } from 'react'
import Payment from '../../components/Payment'
import { useCartContext } from '../../containers/context/CartContext'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore, getFirebase } from '../../firebase'

const PaymentContainer = () => {

    const {items, precioFinal} = useCartContext()
    const [userInfo, setUserInfo] = useState({ });
    const [orderId, setOrderId] = useState('')

    const handleUser = (e) => {

        setUserInfo({
            ...userInfo, 
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) =>{
        e.preventDefault()
        const db = getFirestore();
        const orders = db.collection("orders")
        const newOrder = {
            buyer: userInfo,
            items: {
                id: items[0].id,
                title: items[0].name,
            },
            total: precioFinal(),
            date: firebase.firestore.Timestamp.fromDate(new Date()), 

        }
        orders.add(newOrder).then(({ id })=> {
            setOrderId(id);
        })
    }    

    return (
        <div>
            <Payment items={items} precioFinal={precioFinal} handleUser={handleUser} submit={submit} orderId={orderId} userInfo={userInfo} />
        </div>
    )
}

export default PaymentContainer
