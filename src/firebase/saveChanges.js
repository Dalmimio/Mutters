import { onSnapshot, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { app } from "./index.js";
import  Swal  from "sweetalert2/dist/sweetalert2";
// import { getAuth } from "firebase/auth";

const db = getFirestore(app);

// const auth = getAuth(app);

function espera() {
    psN = null
}
function espera2() {
    psLN = null
}

const saveChangesUser = (psN, psLN, psPIC) => {
    let entro = false
    onSnapshot(collection(db, "users"), (snapshot) => {
        snapshot.forEach(doc1 => {
            if (doc1.data().email == localStorage.getItem('usuarioEmail', doc1.data().email && entro == false)) {
                console.log(doc1.data());
                entro = true
                if (psN) {
                    updateDoc(doc(db, "users", doc1.id), {
                        "name": psN
                        // console.log(doc.data().name);
                        // console.log(psN);
                        
                    });
                    localStorage.removeItem('usuarioName')
                    localStorage.setItem('usuarioName', psN)
                    // setTimeout(espera, 2500);
                    
                }
                if (psLN) {
                    updateDoc(doc(db, "users", doc1.id), {
                        "Lname": psLN
                        // console.log(doc.data().name);
                        // console.log(psN);
                        
                    });
                    localStorage.removeItem('usuarioLname')
                    localStorage.setItem('usuarioLname', psLN)
                    // setTimeout(espera2, 2500);
                }


                // if (psPIC) {
                //     updateDoc(doc(db, "users", doc1.id), {
                //         "photo": psPIC
                //         // console.log(doc.data().name);
                //         // console.log(psN);
                        
                //     });
                //     localStorage.setItem('usuarioPhoto', doc1.data().photo)
                //     // psPIC = null
                // }


                // psN = null
                // psLN = null
                // psPIC = null

                // localStorage.setItem('usuarioPhoto', doc.data().photo)
                // localStorage.setItem('usuarioEmail', doc.data().email)

                // const newUser = {
                //     name: profileStoreUserAndPass.name,
                //     email: profileStoreUserAndPass.email,
                //     photo: profileStoreUserAndPass.photo
                // };
                // addUser1(newUser)

                // const addUser1 = (user) => {
                //     addDoc(userRef,user)
                // }



                // validateUserAndPass.name = doc.data().name
                // validateUserAndPass.photo = doc.data().photo
                // validateUserAndPass.email = doc.data().email
                // console.log(validateUserAndPass.name); 
            }
        })
        
    })
    Swal.fire({
        icon: 'success',
        title: "Success!",
    })
}

export { saveChangesUser }