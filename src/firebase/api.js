import firebase from 'firebase';
import {credentials} from './config' 

/**
 * Initialize Connection to the firebase server
 */
export const initializeFirebaseConnection = () => {
    firebase.initializeApp(credentials);
}


export const loginUserWithEmailAndPassword = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(true)
        .catch(() => {
           firebase.auth().createUserWithEmailAndPassword(email,password)
           .then(true)
           .catch(false);
        });

}