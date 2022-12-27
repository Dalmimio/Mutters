import { app } from './index.js'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const db = getFirestore(app)
const userRef = collection(db, 'users')

const addUser1 = (user) => {
    addDoc(userRef,user)
}

export { addUser1 }