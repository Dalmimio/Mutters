import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onSnapshot, collection, getFirestore } from "firebase/firestore";
import { profileStoreUserAndPass, validateUserAndPass } from '../store/usersRegister.js'
import { app } from "./index.js";
import { addUser1 } from "./userToDb.js";
import Swal from 'sweetalert2/dist/sweetalert2.js'

const db = getFirestore(app);
const auth = getAuth(app);

function myGreeting() {
    document.location.pathname = "/login"
}

function myGreeting2() {
    document.location.pathname = "/circle"
}

const signUpUser = () => {
        createUserWithEmailAndPassword(auth, profileStoreUserAndPass.email, profileStoreUserAndPass.pass)
        .then((r) => {

            r.user.displayName = profileStoreUserAndPass.name
            profileStoreUserAndPass.photo = 'https://picsum.photos/200'


            Swal.fire({
                icon: 'success',
                title: "Registered!",
            })
            setTimeout(myGreeting, 2500);

            const newUser = {
                name: profileStoreUserAndPass.name,
                email: profileStoreUserAndPass.email,
                photo: profileStoreUserAndPass.photo
            };
            addUser1(newUser)
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: "This email has been used or misspelled, please verify it.",
            })
            console.log(error);
        });
}

const signInUser = () => {
    signInWithEmailAndPassword(auth, validateUserAndPass.email, validateUserAndPass.pass)
        .then(() => {
            // console.log(r);
            onSnapshot(collection(db,"users"), (snapshot) =>{
                snapshot.forEach(doc => { 
                    if(doc.data().email == validateUserAndPass.email){
                        localStorage.setItem('usuarioName', doc.data().name)
                        localStorage.setItem('usuarioPhoto', doc.data().photo)
                        localStorage.setItem('usuarioEmail', doc.data().email)
                        validateUserAndPass.name = doc.data().name
                        // validateUserAndPass.photo = doc.data().photo
                        // validateUserAndPass.email = doc.data().email
                        // console.log(validateUserAndPass.name); 
                    }
                    Swal.fire({
                        icon: 'success',
                        title: "Welcome " + validateUserAndPass.name + "!",
                    })
                })
            })

            setTimeout(myGreeting2, 2500);
        })
        .catch((r) => {
            console.log(r);
            Swal.fire({
                icon: 'error',
                title: "Invalid email or password, please try again.",
            })
        });

}

export { signUpUser, signInUser }