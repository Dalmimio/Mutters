<script setup>
import HeaderApp from '../components/HeaderApp.vue';
</script>

<template>


    <div class="contenedor">
        <!-- <HeaderApp />-->
        <div class="espacio-nav">

</div>
        <div class="verde">
            <div>
                <h1>Who is Muzzu?</h1>
            </div>
            <div>
                <img src="../assets/img/flotando.gif" alt="" srcset="">
            </div>


            <div>
                <h2>Muzzu is a virtual pet that wants to accompany you.</h2>
            </div>
            <div>
                <h3>She knows advice and tips to improve your life!</h3>
                <h3>You have to click on her in the different sections and she will give you some of her wisdom!</h3>
            </div>

        </div>


    </div>





</template>

<style scoped>
  .espacio-nav{
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
    background-color: #3e7e55;
    color: white;
    padding: 2vh;
    
}

img {
    height: 30vh;
    border-radius: 20px;

}

button {
    background-color: #7abd87;
    height: 5vh;
    border: none;
    border-radius: 10px;
}



.contenedor {
    display: flex;
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

}
</style>