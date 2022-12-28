<script setup>
import HeaderApp from './HeaderApp.vue';


</script>

<template>
    <div class="w-100 d-flex justify-content-between">
        <HeaderApp/>
        <div class="hola d-flex flex-column align-items-center justify-content-center">
            <h1>Contact with Mutters</h1>
            <div class="d-flex align-items-center flex-row-reverse">
                <form action="https://formsubmit.co/smartech.jade@gmail.com" method="POST" class="d-flex flex-column">
                    <input type="text" placeholder="Name" id="name" name="name" required>
                    <input type="text" placeholder="Email" id="mail" name="email" required>
                    <input type="text" placeholder="Subject" id="subjet" name="subjet">
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" required></textarea>
                    <div class="d-flex justify-content-evenly">
                        <button>Send</button>
                        <button type="reset">Reset</button></div>
                    <!-- <input type="hidden" name="_next" value=""> -->
                    <!-- en value va la pagina para redirigir -->
                    
                        <input type="hidden" name="_captcha" value="false">
                </form>
                <img src="../assets/img/enviando_mail.gif" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hola{
        width: 75vw;
        height: 100vh;
        align-self: flex-end;
        background-color: #f5f5f5;
    }
    .hola input, textarea{
        width: 30vw;
        margin: 5px 0;
        background-color: #7abd8763;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
    }
    input:focus, textarea:focus{
        outline: #7ABD87 solid 2px;
    }
    button{
        width: 10rem;
        align-self: center;
        margin-top: 1rem;
        padding: 5px 10px;
        background-color: #7ABD87;
        border-radius: 15px;
        border: #3E7E55 solid 2px;
        transition: .5s;
    }
    button:hover{
        background-color: #3E7E55;
        border-radius: 0;
        color: #f5f5f5;
        border:  #7ABD87 solid 2px;
    }
    img{
        width: 30vw;
    }
</style>