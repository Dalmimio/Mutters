import { app } from '../firebase/index.js'
import { getFirestore, collection, query, getDocs, onSnapshot } from 'firebase/firestore'
import pinturas from '../store/pinturas.js'

const db = getFirestore(app)
const pinturasRef = collection(db, 'pinturas')

const traerPinturas = () => {
    onSnapshot(pinturasRef, (snapshot) => {
    pinturas.value = []
    snapshot.forEach(doc => {
        const pintura = {
            id: doc.id,
            autor: doc.data().autor,
            name: doc.data().nombre,
            description: doc.data().descripcion,
            urlImage: doc.data().url
        }
        pinturas.value.push(pintura)
    })
})
}

export default traerPinturas






