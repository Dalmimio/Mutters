<script setup>
import { validateUserAndPass } from '../store/usersRegister.js'


// console.log(validateUserAndPass.name);

validateUserAndPass.name = localStorage.getItem('usuarioName')
validateUserAndPass.Lname = localStorage.getItem('usuarioLname')
validateUserAndPass.photo = localStorage.getItem('usuarioPhoto')
validateUserAndPass.email = localStorage.getItem('usuarioEmail')


const logOut = () => {
  localStorage.clear()
  window.location.reload();
}

</script>

<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <aside class="sidebar">
      <header class="sidebar-header">

      </header>
      <nav class="sin-texto">
        <button>
          <span>
            <RouterLink class="w-100 d-flex justify-content-center align-items-center gap-3" to="./"> <img src="../assets/img/home_icon.png" alt="" srcset="">
              <span class="text-oculto">Home</span>
            </RouterLink>
          </span>
        </button>

        <button>
          <span>

            <a class="w-100 d-flex justify-content-center align-items-center gap-3" href="./sticky#about_mutters"> <img src="../assets/img/info_icon.png" alt="" srcset="">
              <span class="text-oculto">About</span>
            </a>
          </span>
        </button>

        <button>
          <span>
            <a class="w-100 d-flex justify-content-center align-items-center gap-3" href="./sticky#muzzu"> <img src="../assets/img/hearth_icon.png" alt="" srcset="">
              <span class="text-oculto">Muzzu</span>
            </a>
          </span>
        </button>

        <button>
          <span>
            <RouterLink class="w-100 d-flex justify-content-center align-items-center gap-3" to="./contact"> <img src="../assets/img/contact_icon.png" alt="" srcset="">
              <span class="text-oculto">Contact</span>
            </RouterLink>
          </span>
        </button>
        <button>
          <span>
            <RouterLink class="w-100 d-flex justify-content-center align-items-center gap-3" to="./newpaint"> <img src="../assets/img/paint_icon.png" alt="" srcset="">
              <span class="text-oculto">Paint</span>
            </RouterLink>
          </span>
        </button>

        <button>
          <span>
            <RouterLink class="w-100 d-flex justify-content-center align-items-center gap-3" to="./gallery"> <img src="../assets/img/gallery_icon.png" alt="" srcset="">
              <span class="text-oculto">Gallery</span>
            </RouterLink>
          </span>
        </button>

        <button>
          <span>
            <RouterLink class="w-100 d-flex justify-content-center align-items-center gap-3" to="../circle"> <img src="../assets/img/circle_icon.png" alt="" srcset="">
              <span class="text-oculto">Breath</span>
            </RouterLink>
          </span>
        </button>

        <button v-if="!validateUserAndPass.email">
          <span>
            <RouterLink class="w-100 d-flex justify-content-center align-items-center gap-3" to="./login">
              <i class="material-symbols-outlined"> person </i>
              <span class="text-oculto">Login</span>
            </RouterLink>
          </span>
        </button>

        <!-- <button v-if="!validateUserAndPass.email">
          <span>
            <img src="" class="rounded-5" />
            <span class="text-dark d-flex flex-column gap-2">
              <span class="fullname text-dark"> Name </span>
              <span class="username text-dark"> Email </span>
            </span>
          </span>
        </button> -->

        <!-- <button v-if="validateUserAndPass.email" class="user-button">

        </button> -->

        <button v-if="validateUserAndPass.email" class="user-button mt-1">
          <RouterLink to="/profile">
            <span class="d-flex gap-4">
              <img :src="validateUserAndPass.photo" class="rounded-5" />
              <span class="text-dark">
                <span class="fullname text-dark"> {{ validateUserAndPass.name }} {{ validateUserAndPass.Lname }}</span>
                <span class="username text-dark">{{ validateUserAndPass.email }}</span>
              </span>
              <!-- <RouterLink to="./login"> <i class="material-symbols-outlined"> more_vert </i>
            </RouterLink> -->
            </span>
          </RouterLink>
        </button>
        <button v-if="validateUserAndPass.email" class="mt-0">
          <div class="d-flex justify-content-center align-items-center">
            <div @click="logOut" class="btn colorBotonOut rounded-2">
              Log out
            </div>
          </div>
        </button>


      </nav>
    </aside>
    <div>
      <nav class="mobile-bottom-nav">
        <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
          <div class="mobile-bottom-nav__item-content">
            <RouterLink to="./sticky"><img class="iconitos" src="../assets/img/home_icon.png" alt="" srcset=""></RouterLink> 
          </div>
        </div>
        <div class="mobile-bottom-nav__item">
          <div class="mobile-bottom-nav__item-content">
          <RouterLink to="./newpaint"><img class="iconitos" src="../assets/img/paint_icon.png" alt="" srcset=""></RouterLink> 

          </div>
        </div>
        <div class="mobile-bottom-nav__item">
          <div class="mobile-bottom-nav__item-content">
            <RouterLink to="./gallery" class="btn botonera"> <img class="iconitos" src="../assets/img/gallery_icon.png" alt="" srcset=""> </RouterLink>

          </div>
        </div>
        <div class="mobile-bottom-nav__item">
          <div class="mobile-bottom-nav__item-content">
            <RouterLink to="./circle" class="btn botonera"> <img class="iconitos" src="../assets/img/circle_icon.png" alt="" srcset=""> </RouterLink>

          </div>
        </div>


      </nav>
    </div>


  </body>

  </html>
</template>

<style scoped>
* {
  box-sizing: border-box;

}

body {
  margin: 0;
  background: #000000;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;

}

.colorBotonOut {
  background-color: #3e7e55;
}

.iconitos {
  display: none
}

span>a , Routerlink {
  text-decoration: none;
  color: black
}

.material-symbols-outlined {

  font-size: 22px;
  color: #f5f5f5;
  background-color: #CADEC8;
  border-radius: 50%;
  padding: 7px 7px;

}

.sidebar {
  position: fixed;
  left: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 25vw;
  height: 100%;
  padding: 0px 10px 30px 15px;

  border-right: 1px solid #CADEC8;
  background-color: #f5f5f5;
  font-family: 'Quicksand';

}


.sidebar-header {
  width: 100%;
  background-image: url(../assets/img/logo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding-top: 18vh;
  background-size: 90%;

}

.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  will-change: transform;
  transform: translateZ(0);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}




@media screen and (max-width: 577px) and (min-width: 425px) {
  .sidebar-header {
    width: 100%;
    background-image: url(../assets/img/logopeque.png);
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    background-size: 10vh
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;




  }


}


.sidebar button {
  height: 60px;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
  text-align: left;
}

.sidebar button>span {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  height: 48px;

  border-radius: 24px;
  line-height: 1;
}

.sidebar button:hover>span {
  background: rgba(255, 255, 255, 0.08);
}

.sidebar button i {
  position: relative;
  font-size: 28px;
  transition: 0.2s;
}

.sidebar button img {
  width: 50px;


}

.sidebar button i>span {
  display: grid;
  place-items: center;
  padding: 2px 5px;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  left: 50%;
  translate: -50% 0;
  background: #1d9bf0;
  color: #f9f9f9;
  font-size: 10px;
  font-family: BlinkMacSystemFont;
  font-style: normal;
}

.sidebar button span {
  font-size: 17px;
}

.sidebar>nav {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sidebar>nav button:last-child {
  margin-top: auto;
}


button.user-button .fullname {
  font-size: 15px;
}

button.user-button .username {
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
}


button.user-button span {
  width: 100%;
}

button.user-button span>span {
  display: grid;
  gap: 4px;
  width: 100%;
}

button.user-button span>i {
  font-size: 20px;
  margin-left: auto;
}




@media (width < 580px) and (width > 425px) {
  .sidebar {
    width: 30vw;

  }

  .text-oculto {
    display: none;

  }

  .sin-texto {
    display: flex;
    justify-content: center;
    align-items: center;
  }



  .botonera {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }


  .sidebar button>span {
    width: 50px;
  }

  .sidebar button>span>span {
    opacity: 0;
    display: none;
  }


  button.user-button span>i {
    display: none;
  }
}



@media screen and (max-width: 425px) {

  .sidebar {
    display: none;
  }

  .mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    will-change: transform;
    transform: translateZ(0);

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;





    height: 60px;
    border-top: 2px solid #CADEC8;

    background-color: #F5F5F5;


  }

  .iconitos {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 10vh;
    padding-bottom: 2vh;





  }


}
</style>