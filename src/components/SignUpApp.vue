<script setup>
import { loginWithGoogle, logOut } from '../firebase/loginGoogle.js'
import { profileStoreUserAndPass, profileStoreGoogle, validateUserAndPass } from '../store/usersRegister.js'
import { RouterLink } from 'vue-router'
import { signUpUser, signInUser } from '../firebase/loginUser&Pass.js'
import { ref } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const email = ref('')
const pass1 = ref('')
const pass2 = ref('')
const emailLogin = ref('')
const passLogin = ref('')
const name = ref('')
const Lname = ref('')


// FUNCTIONS
// const addNewUser = () => {

// }



const SignUp = (n, ln, e, p) => {
    profileStoreUserAndPass.name = n
    profileStoreUserAndPass.Lname = ln
    profileStoreUserAndPass.email = e
    profileStoreUserAndPass.pass = p

    signUpUser()

    name.value = ''
    Lname.value = ''
    email.value = ''
    pass1.value = ''
    pass2.value = ''

}

// const SignIn = (e, p) => {
//     validateUserAndPass.email = e
//     validateUserAndPass.pass = p

//     signInUser()

//     emailLogin.value = ''
//     passLogin.value = ''

// }

const signOut = () => {
    profileStoreUserAndPass.email = null
}

</script>

<template >

    <body class="d-flex flex-column gap-2 p-3">
        <RouterLink class="" to="/login">
            <img class="img-flecha" src="../assets/img/flecha.png" alt="back">
        </RouterLink>
        <!-- <div class="px-lg-5">
            <RouterLink to="/login" class="btn btn-secondary"> Return </RouterLink>
        </div> -->
        <div v-if="!profileStoreUserAndPass.email || !profileStoreGoogle.user"
            class="d-flex flex-column justify-content-center align-items-center">
            <div class="allForm d-flex flex-column justify-content-center p-2 m-0">
                <!-- FORM SIGN UP USER & PASS -->
                <div
                    class="div1 container rounded-4 d-flex flex-column justify-content-center align-items-center text-light p-2">
                    <h1>Sign Up</h1>
                    <form class="div1_1 form-control">
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">First Name</label>
                            <input v-model="name" type="text" class="form-control" id="exampleInputName"
                                aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputLName" class="form-label">Last Name</label>
                            <input v-model="Lname" type="text" class="form-control" id="exampleInputLName"
                                aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail2" class="form-label">Email address</label>
                            <input v-model="email" type="email" class="form-control" id="exampleInputEmail2"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword2" class="form-label">Password</label>
                            <input v-model="pass1" type="password" class="form-control" id="exampleInputPassword2">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword3" class="form-label">Repeat Password</label>
                            <input v-model="pass2" type="password" class="form-control" id="exampleInputPassword3">
                            <div v-if="pass1 == pass2 && pass1 != ''" class="form-text text-success mb-2">&check;
                                Passwords match!
                            </div>
                            <div v-else class="form-text text-danger mb-2">&cross; Verify passwords</div>
                        </div>

                        <RouterLink to="/login" id="retardoLink" class="d-flex justify-content-center">
                            <button @click.prevent="SignUp(name, Lname, email, pass1)" type="submit"
                                :class="name && Lname && email && pass1 == pass2 && pass1 != '' ? 'btn btn-success' : 'btn btn-success disabled'">Sign
                                Up</button>

                        </RouterLink>
                    </form>
                </div>
            </div>
        </div>

        <div v-else>
            <h1>{{ profileStoreUserAndPass.email }}</h1>
            <button @click="signOut" class="btn btn-danger">Log Out</button>
        </div>

    </body>

</template>

<style scoped>

body {
    background-color: #CADEC8;
    min-height: 100vh;
  
  }

.allForm {
    width: 92vw;
}

.div1 {

    font-family: 'Nunito', sans-serif;
    font-size: 48px;
    background-color: #3E7E55;
}

.div1_1 {
    background-color: #CADEC8;
}

.img-flecha{
    width: 100px;
    align-self: flex-start;
  }

.botonG {
    border: 2px solid #3E7E55;
}

.botonGoogle {

    width: 25rem;
    transition: all .4s ease-out;
}

.botonGoogle:hover {
    color: blue;
    transform: scale(110%);
}

.gogImg {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
}

@media screen and (min-width: 768px) {
    .div1 {
        width: 600px;
    }

}
</style>