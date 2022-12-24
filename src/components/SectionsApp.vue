<script setup>
import HeaderApp from './HeaderApp.vue';
</script>

<template>


  <div class="contenedor">
    <HeaderApp/>
    <div class="verde">
      <div>
        <h1>Do you want to relax or distract yourself for a moment? Try one of our sections.</h1>
      </div>



      <div class="sections">
        <div class="section">

          <img src="../assets/img/breath.png" alt="" srcset="">
          <button></button>
        </div>
        <div class="section">

          <img src="../assets/img/pinta.png" alt="" srcset="">
          <button></button>
        </div>
        <div class="section">

          <img src="../assets/img/share.png" alt="" srcset="">
          <button></button>
        </div>

      </div>
      <div>
        <button>Let's meet Muzzu!</button>

      </div>

    </div>


  </div>





</template>

<style scoped>
.sections {

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.section {
  border-radius: 4px;
  margin: 1vh;
}

img {
  width: 100%;
  height: 100%;
}

.verde {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  min-height: 100vh;
  justify-content: space-around;
}

button {
  background-color: #7abd87;
  height: 10vh;
  border: none;
  border-radius: 10px;
  font-size: 4vh;
  color: white;
}



.contenedor {

  display: flex;
  background-color: #cadec8;
  font-family: 'Quicksand';
}





@media screen and (max-width: 425px) {

  .verde {
    align-items: center;
    width: 100%;
    justify-content: space-around;
    min-height: calc(100vh - 60px);
  }

}
</style>