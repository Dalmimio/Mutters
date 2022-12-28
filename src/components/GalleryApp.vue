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

<template style="background-color: #f5f5f5">









    <div
        style="background-color: #f5f5f5; height: 100vh; display: flex; font-family: 'Quicksand'; flex-direction: column;">


        <div class="title w-100 d-flex flex-column align-items-center justify-content-center text-center">
            <h1>Exhibitions</h1>
            <h5>Browse and comment on shared paintings or</h5>
            <button class="btn btn-primary mt-2">create your own</button>
          </div>

          <div class="contenedorCards d-flex gap-5 flex-wrap justify-content-around mt-4">

            <div class="card d-flex flex-column cardi align-items-center text-center" v-for="pintura in pinturas">
              <span style="font-weight: bold;">Author: </span>{{ pintura.autor }}
              <img class="w-100" :src="pintura.urlImage">



              <h4>{{ pintura.name }}</h4>

              <p> {{ pintura.description }}</p>

              <NewComment />

                <Comments class="w-100" />

            </div>

          </div>
        </div>




</template>

<style scoped>
.espacio-nav {
  width: 25vw;
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
  height: 5vh;
  border: none;
  border-radius: 10px;
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