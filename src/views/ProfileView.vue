<script setup>
// import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { saveChangesUser } from '../firebase/saveChanges.js'
import { profileStoreUserAndPass } from '../store/usersRegister.js'



const name = ref('')
const Lname = ref('')
let photo = ref('')



const addFile = (e) => {
    photo = e.target.files[0]
    // console.log(photo);
}


const saveChanges = (n, ln, pic) => {

    profileStoreUserAndPass.name = n
    profileStoreUserAndPass.Lname = ln
    profileStoreUserAndPass.photo = pic
    // console.log(profileStoreUserAndPass.photo);

    saveChangesUser(profileStoreUserAndPass.name, profileStoreUserAndPass.Lname, profileStoreUserAndPass.photo)

    
    name.value = ''
    Lname.value = ''
    photo.value = ''

}


</script>
<template>
    <RouterLink class="" to="/sticky">
        <img class="img-flecha" src="../assets/img/flecha.png" alt="back">
    </RouterLink>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="allForm d-flex flex-column justify-content-center p-2 m-0">
            <!-- FORM SIGN UP USER & PASS -->
            <div
                class="div1 container rounded-4 d-flex flex-column justify-content-center align-items-center text-light p-2">
                <h1>Profile</h1>
                <form class="div1_1 form-control">
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">First Name</label>
                        <input v-model="name" type="text" class="form-control" id="exampleInputName"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputLName" class="form-label">Last Name</label>
                        <input v-model="Lname" type="text" class="form-control" id="exampleInputLName"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="inputGroupFile01">Photo</label>
                        <input @change="addFile($event)" type="file" accept="image/*" class="form-control"
                            id="photojpg">
                    </div>
                    <div id="retardoLink" class="d-flex justify-content-center">
                        <button @click.prevent="saveChanges(name, Lname, photo)" type="submit"
                            :class="name || Lname || photo ? 'btn btn-success' : 'btn btn-success disabled'">Save
                            Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.allForm {
    width: 92vw;
}

.img-flecha {
    width: 100px;
    align-self: flex-start;
}

.div1 {

    font-family: 'Nunito', sans-serif;
    font-size: 48px;
    background-color: #3E7E55;
}

.div1_1 {
    background-color: #CADEC8;
}

@media screen and (min-width: 768px) {
    .div1 {
        width: 600px;
    }

}
</style>