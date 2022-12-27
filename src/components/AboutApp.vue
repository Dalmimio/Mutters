<script setup>
import HeaderApp from '../components/HeaderApp.vue';
</script>

<template>


    <div class="contenedor">
      <!--  <HeaderApp />-->
      <div class="espacio-nav">

</div>
        <div class="verde">
            <div>
                <h1>About Mutter</h1>
            </div>




            <div>
                <h2>At Mutter we know that life sometimes moves too fast.</h2>
            </div>
            <div class="sections">

                <div class="section_one">
                    <img src="../assets/img/exitoso.gif" alt="" srcset="">
                    <div class="text">That's why we want to create together with you a place where we can simply relax.
                        We all carry within the fastest relaxation tool. Our lungs! Let's use them wisely.
                        This is why our <RouterLink to="./circle">circle</RouterLink> is so important.</div>
                </div>
                <div class="section_two">
                    <img src="../assets/img/pintando.gif" alt="" srcset="">
                    <div class="text">What do you think if we draw for a while?
                        The important thing is that you free your mind through creativity.
                        Express yourself and see how others do it, connect and comment on their drawings!
                        Visit the forum in the gallery></div>
                </div>

            </div>

        </div>


    </div>





</template>

<style scoped>
  .espacio-nav{
    width: 40vw;
  }
.sections {
    display: flex;
    flex-direction: column;
    gap: 3vh;
}

.section_one {
    display: flex;


}

.section_two {
    display: flex;
    flex-direction: row-reverse;

}

.text {
    color: white;
    border: #3e7e55 solid 3vh;
    background-color: #3e7e55;
    border-radius: 1vh;
    margin: 2vh;
}

.verde {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
    min-height: 100vh;
    justify-content: space-around;
    background-color: #f5f5f5;
    padding: 2vh;
}

img {
    height: 25vh;

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
    background-color: #f5f5f5;
}




@media screen and (max-width: 425px) {

    .espacio-nav{
    display: none;
  }

  img {
    height: 30vh;
    width: 30vh;

}

    .verde {

        align-items: center;
        width: 100%;
        justify-content: space-around;
        min-height: calc(100vh - 60px);
}

.sections {
    display: flex;
    flex-direction: column;
    gap: 3vh;
}

.section_one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


}

.section_two {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

}




}
</style>