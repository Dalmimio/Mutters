<script setup>


import { onMounted } from 'vue';

import HeaderApp from '../components/HeaderApp.vue'
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

.cardi {
    width: 15rem;
}

button {
    width: 13rem;
}
</style>