<script setup>
import { loginWithGoogle, logOut } from '../firebase/loginGoogle.js'
import { profileStoreUserAndPass, profileStoreGoogle, validateUserAndPass } from '../store/usersRegister.js'
import { RouterLink } from 'vue-router'
import { signUpUser, signInUser } from '../firebase/loginUser&Pass.js'
import { ref } from 'vue'
// import HeaderApp from '../components/HeaderApp.vue';
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

// const SignUp = (n, e, p) => {
//   profileStoreUserAndPass.name = n
//   profileStoreUserAndPass.email = e
//   profileStoreUserAndPass.pass = p

//   signUpUser()

//   name.value = ''
//   Lname.value = ''
//   email.value = ''
//   pass1.value = ''
//   pass2.value = ''
// }

const SignIn = (e, p) => {
  validateUserAndPass.email = e
  validateUserAndPass.pass = p

  signInUser()

  emailLogin.value = ''
  passLogin.value = ''

}

const signOut = () => {
  profileStoreUserAndPass.email = null
}

</script>

<template >

  <body class="d-flex flex-column gap-2 p-3 ">
    <div class="px-lg-5">
      <RouterLink to="/" class="btn btn-secondary"> Return </RouterLink>
    </div>
    <div v-if="!profileStoreUserAndPass.email || !profileStoreGoogle.user"
      class="d-flex flex-column justify-content-center align-items-center">

      <!-- FORM LOGIN -->

      <div
        class="div1 container rounded-4 p-2 d-flex flex-column justify-content-center align-items-center text-light p-0 m-0">
        <h1>Sign In</h1>
        <form class="div1_1 form-control">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="emailLogin" type="email" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="passLogin" type="password" class="form-control" id="exampleInputPassword1" required>
          </div>

          <RouterLink to='/signup' class="d-flex justify-content-start align-items-start mb-3">
            <a class="text-primary text-start">First time? Create a new user</a>
          </RouterLink>

          <div class="d-flex flex-column align-items-center gap-2">
            <button @click.prevent="SignIn(emailLogin, passLogin)" type="submit"
              :class="emailLogin && passLogin ? 'botonSign btn btn-success' : 'botonSign btn btn-success disabled'">Sign
              In</button>
          </div>
        </form>
        <div class="botonGoogle d-flex flex-column justify-content-center align-items-center gap-3 w-100 p-2">
          <!-- <h2 v-if="profileStoreGoogle.user" class="text-dark">Welcome {{ profileStoreGoogle.user.displayName }}!</h2> -->
          <button v-if="!profileStoreGoogle.user" @click="loginWithGoogle"
            class="botonG btn d-flex flex-row align-items-center gap-1 bg-light rounded-3 h-25 border-2">
            <img class="gogImg" src="../assets/img/google.png" alt="">
            <p class="mb-0 w-100">Login with Google</p>
          </button>
          <button v-else
            class="botonG btn d-flex flex-row align-items-center gap-1 bg-light rounded-3 h-25 border-2 disabled">
            <img class="gogImg" src="../assets/img/google.png" alt="">
            <p class="mb-0 w-75 text-dark">Success!</p>
          </button>
          <!-- <button v-if="profileStoreGoogle.user" @click="logOut" class="btn btn-danger p-0">Log out</button> -->
        </div>
      </div>

      <!-- CARDS PRUEBA AOS  -->
      <!-- <div class="d-flex flex-column justify-content-center align-items-center gap-3">
          <div v-for="i in 3" class="card gap-3" style="width: 18rem;" data-aos="flip-right" data-aos-duration="1000">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> -->
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

.div1 {
  width: 92vw;
  font-family: 'Nunito', sans-serif;
  font-size: 48px;
  background-color: #3E7E55;
}

.div1_1 {
  background-color: #CADEC8;
}

.botonSign {
  width: 100%;
}

.botonG {
  width: 100%;
  border: 2px solid #3E7E55;
}

.botonGoogle {
  width: 100px;
}

.botonGoogle:hover {
  color: blue;
  transform: scale(105%);
}

.gogImg {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
}

@media screen and (min-width: 500px) {
  .botonG {
    width: 200px;
  }

  .botonSign {
    width: 200px;
  }

}

@media screen and (min-width: 768px) {
  .div1 {
    width: 600px;
  }

}
</style>