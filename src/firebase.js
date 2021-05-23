import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCvJ8RoNTcCshOalfSzgYVqNjfvM2ilC_4",
    authDomain: "galeriaecommerce-a6b0a.firebaseapp.com",
    projectId: "galeriaecommerce-a6b0a",
    storageBucket: "galeriaecommerce-a6b0a.appspot.com",
    messagingSenderId: "676092334948",
    appId: "1:676092334948:web:31a450167e6f10138c6071"
})

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
