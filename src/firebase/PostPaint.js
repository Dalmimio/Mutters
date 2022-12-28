import { app } from './index.js'
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const db = getFirestore(app);
const paintRef = collection(db, "paints");

const addPaint = (paint) => {
    addDoc(paintRef, paint)
    .then((docRef) => {
        Swal.fire({
            icon: 'success',
            title: "Published!",
        })
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export default addPaint;