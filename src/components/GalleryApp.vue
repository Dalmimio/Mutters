<script setup>


import { onMounted } from 'vue';

import HeaderApp from '../components/HeaderApp.vue'
import traerPinturas from '../firebase/pinturas.js'

import pinturas from '../store/pinturas';

onMounted(() => {
  traerPinturas()
}) 

</script>

<template style="">









<div style="background-color: grey; height: 100vh; display: flex; font-family: 'Quicksand'; flex-direction: column;">


    <div class="title w-100 d-flex align-items-center justify-content-center"><h1>Exhibitions</h1></div>

    <div class="contenedorCards d-flex gap-5 flex-wrap justify-content-around">

        <div class="card d-flex flex-column w-25 align-items-center text-center" v-for="pintura in pinturas">
            <span style="font-weight: bold;">Author: </span>{{pintura.autor}}
            <img class="w-100" :src="pintura.urlImage">

            <p>{{pintura.name}}</p>

        <p> {{pintura.description}}</p>

        

        
        
        </div>

    </div>




</div>

        
</template>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

 .new {
    height: 5rem;
    width: 12rem;
    border-radius: 3rem;

}

.title {
    height: 20vh;
    background-color: #f5f5f5;
}

img {
    width: 6rem;
    height: 10rem;
}



</style>