<script setup>

</script>

<template>


  <div class="contenedor">

    <div class="verde">
      <div class="comienzo">
        <h1>Welcome to Mutter.</h1>
      </div>

      <div class="loguito">
        <img src="../assets/img/logo.png" alt="" srcset="">
      </div>
      <div>
        <h1> A place to relax.</h1>
      </div>

      <div><button>
          <h2>Let's go!</h2>
        </button></div>

    </div>


  </div>
</template>

<style scoped>
.loguito {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end
}

.comienzo {

  font-size: 3vh;
  color: white;
}

.verde {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  min-height: 100vh;
  justify-content: space-around;
  background-image: url(../assets/img/fondo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

img {
  width: 45vh
}

.contenedor {

  display: flex;
  color: white;
  font-family: 'Quicksand';
}

button {
  background-color: white;
  width: 20vh;
  height: 8vh;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #3e7e55
}
</style>