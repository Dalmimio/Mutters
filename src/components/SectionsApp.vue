<script setup>
import HeaderApp from './HeaderApp.vue';

</script>

<template>


  <div class="contenedor">
    <!--<HeaderApp/>-->
    <div class="espacio-nav">

    </div>
    <div class="verde">
      <div>
        <h1>Do you want to relax or distract yourself for a moment? Try one of our sections.</h1>
      </div>



      <div class="sections">
        <div class="section">
          <RouterLink to="./circle">   <img src="../assets/img/breath.png" alt="" srcset="">
            </RouterLink>
       
          
        </div>
        <div class="section">
          <RouterLink to="./newpaint">   <img src="../assets/img/pinta.png" alt="" srcset="">
            </RouterLink>
         
        
        </div>
        <div class="section">

          <img src="../assets/img/share.png" alt="" srcset="">
          
        </div>

      </div>
      <div>
        <a href="#muzzu">  <button>Let's meet Muzzu!</button></a>
      

      </div>

    </div>


  </div>





</template>

<style scoped>
  .espacio-nav{
    width: 25vw;
  }

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
  width: 75vw;
  text-align: center;
  min-height: 100vh;
  justify-content: space-around;
  padding: 2vh;
}

button {
  background-color: #7abd87;
  height: 10vh;
  border: none;
  border-radius: 10px;
  font-size: 3vh;
  color: white;
  padding:2vh
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
        min-height:100vh;
 }

  .espacio-nav{
    display: none;
  }

  .sections {

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

img {
  width: 20vh;
  height: 20vh;
}

.section {
  border-radius: 4px;
  margin: 1px;
}

}
</style>