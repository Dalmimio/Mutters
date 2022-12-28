import { app } from '../firebase/index.js'
import { getFirestore, collection, query, getDocs, onSnapshot } from 'firebase/firestore'
import pinturas from '../store/pinturas.js'

const db = getFirestore(app)
const pinturasRef = collection(db, 'paints')

const traerPinturas = () => {
    onSnapshot(pinturasRef, (snapshot) => {
    pinturas.value = []
    snapshot.forEach(doc => {
        const pintura = {
            id: doc.id,
            autor: doc.data().name,
            name: doc.data().title,
            description: doc.data().description,
            urlImage: doc.data().img
        }
        pinturas.value.push(pintura)
    })
})
}

export default traerPinturas






