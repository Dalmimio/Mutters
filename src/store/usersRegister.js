import { reactive } from 'vue'

//registro con google
const profileStoreGoogle = reactive({
    user: null
});

// registro con usuario y pass 
const profileStoreUserAndPass = reactive({
    name: null,
    email: null,
    photo: null
});

// comprobar si usuario y pass ya estan registrados
const validateUserAndPass = reactive({
    email: null,
    pass: null
});

export { profileStoreGoogle, profileStoreUserAndPass, validateUserAndPass }