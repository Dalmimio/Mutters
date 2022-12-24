<script setup>
import SideBarApp from './SideBarApp.vue';
</script>

<template>


  <div class="contenedor">
    <SideBarApp />
    <div class="verde">
      <div>
        <h1>Just Breath</h1>
      </div>

      <div id="breath-container">
        <div class="breath-circle" id="circle1"></div>
        <div class="breath-circle" id="circle2"></div>
        <div class="breath-circle" id="circle3"></div>
        <div class="breath-circle" id="circle4"></div>
        <div class="breath-circle" id="circle5"></div>
        <div class="breath-circle" id="circle6"></div>
      </div>

      <div>
        <h2>When the circles expand, inhale, then when they contract, exhale</h2>
      </div>
      <div>
        <h3>Do you want to try with a guide?</h3>
      </div>
      <div><button>Play Guide</button></div>
    </div>


  </div>





</template>

<style scoped>
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
  height: 5vh;
  border: none;
  border-radius: 10px;
}



.contenedor {

  display: flex;

  font-family: 'Quicksand';
}



#breath-container {
  display: flex;

  width: 9rem;
  height: 9rem;
  animation-name: growing-container;
  animation-duration: 7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.breath-circle {
  position: absolute;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  transform: translate(0, 0);
  opacity: 0.25;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease;
}

#circle1 {
  background-color: #7abd87;
  animation-name: expanding-circle1;
}

#circle2 {
  background-color: #7abd87;
  animation-name: expanding-circle2;
}

#circle3 {
  background-color: #7abd87;
  animation-name: expanding-circle3;
}

#circle4 {
  background-color: #7abd87;
  animation-name: expanding-circle4;
}

#circle5 {
  background-color: #7abd87;
  animation-name: expanding-circle5;
}

#circle6 {
  background-color: #7abd87;
  animation-name: expanding-circle6;
}

@media screen and (max-width: 425px) {

  .verde {

    align-items: center;
    width: 100%;
    justify-content: space-around;
    min-height: calc(100vh - 60px);





  }

}

@keyframes expanding-circle1 {

  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-45px, -55px);
  }
}

@keyframes expanding-circle2 {

  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(45px, -55px);
  }
}

@keyframes expanding-circle3 {

  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-70px, 0px);
  }
}

@keyframes expanding-circle4 {

  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(70px, 0px);
  }
}

@keyframes expanding-circle5 {

  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(45px, 55px);
  }
}

@keyframes expanding-circle6 {

  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-45px, 55px);
  }
}

@keyframes growing-container {

  0% {
    transform: scale(.15) rotate(180deg);
  }

  100% {
    transform: scale(1);
  }




}
</style>