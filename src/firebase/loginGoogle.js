import { app } from "./index.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { profileStoreGoogle } from "../store/usersRegister.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider)
        .then(result => {
            profileStoreGoogle.user = result.user
            console.log(profileStoreGoogle.user);
        })
        .catch( error => console.warn('error',error));
}

function logOut(){
    signOut(auth)
    .then(() => profileStoreGoogle.user = null)
    .catch(() => console.warn('error with log out'));
}

export { loginWithGoogle, logOut }