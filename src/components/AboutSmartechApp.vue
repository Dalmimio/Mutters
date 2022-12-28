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
        <h1>We are <img class="loguito" src="../assets/img/smartech_logo.gif" alt="" srcset="">.</h1>
      </div>



      <div class="sections">
        <div class="section">
          <img src="../assets/img/dali.png" alt="" srcset="">
           
       
          
        </div>
        <div class="section">
        <img src="../assets/img/ale.png" alt="" srcset="">
          
         
        
        </div>
        <div class="section">

<img src="../assets/img/lean.png" alt="" srcset="">

</div>

<div class="section">

<img src="../assets/img/joha.png" alt="" srcset="">

</div>

      </div>
      <div>
         <button>Your solution just a <a href="mailto:smartech.jade@gmail.com">click</a> away.</button>
      

      </div>

    </div>


  </div>





</template>

<style scoped>
  .espacio-nav{
    width: 25vw;
  }

  .loguito{
   width: 60%;
 

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

a{
  color: #f730fc;
  text-decoration: none;
  background-color: black;
  padding: 1vh;
  border-radius: 5px;

 

}

.contenedor {

  display: flex;
  background-color: #f5f5f5;
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

  a{
    
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