<script setup>
import HeaderApp from './HeaderApp.vue';
import { onMounted } from 'vue';

import NewComment from './NewComment.vue'
import Comments from './Comments.vue'
import traerPinturas from '../firebase/pinturas.js'


import pinturas from '../store/pinturas';

onMounted(() => {
  traerPinturas()
})

</script>

<template>



  <div class="contenedor">
    <HeaderApp />
    <div class="verde">
      <div class="espacio-nav">
        </div>

        <div>


          <div>

    <div>


        <div class="header">

            <h1>Exhibitions</h1>
            <h2>Browse and comment on shared paintings or</h2>
            <RouterLink to="./newpaint"><button class="btn btn-primary mt-2">Create your own <img class="lapicito" src="../assets/img/paint_icon.png" alt="" srcset="">  </button></RouterLink>
            
          </div>

          <div class="cards">

            <div class="card" v-for="pintura in pinturas">

              <div class="autor">
                <div class="author">
                  <span>Author: </span> {{ pintura.autor }}
                </div>
              
             
              <img class="w-100" :src="pintura.urlImage">
            </div>


              <h2>{{ pintura.name }}</h2>

              <h4> {{ pintura.description }}</h4>


              <NewComment />

           

            </div>

          </div>
        </div>




      </div>

    </div>
  </div>
    </div>
   






</template>

<style scoped>
.espacio-nav {
  width: 25vw;
}



.header{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  align-self: center;
  gap: 2vh;


}

.lapicito{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  height:   10%;
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
  background-color:#EAEEE5 ;
  
}

.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  padding: 2vh;
  background-color:#f5f5f5;
  margin: 4vh;
}

 .cards{
  margin: 2vh;

 }

 .autor{
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 1vh;
 }

 .author{
  font-size: larger;
  display: flex;
  flex-direction: row;
  gap: 1vh;
  padding-bottom: 1vh;
  background-color: #7abd87;
  padding: 1vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 1vh;
  color:white;
  font-family: 'Quicksand';
 }





button {
  background-color: #7abd87;
 display: flex;
 align-items: center;
 font-size: 3vh;
  border: none;
  border-radius: 10px;
  width: 100%;
  justify-content: center;
}



.contenedor {

  display: flex;
  justify-content: flex-end;

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