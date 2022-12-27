<script setup>

// const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// }  )

const consejos = []
consejos[0] = 'Sabias que? La meditación puede producir un estado de relajamiento profundo y una mente tranquila.'
consejos[1] = 'Unos buenos masajes pueden ayudar a relajar el cuerpo.'

consejos.forEach(c => {
    
})

// console.log(tooltipList);

// const mostrarConsejo = () => {
//     Math.random(tooltipList)

// }


</script>

<template>
    <button type="button" class="pet btn btn-secondary custom-tooltip" data-bs-toggle="tooltip"
        data-bs-placement="top" data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
        Custom tooltip
    </button>

    <!-- <div class="">

    </div> -->
</template>

<style scoped>
.pet {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    width: 10rem;
    height: 10rem;
    border: 2px solid red;
}

.custom-tooltip {
    --bs-tooltip-bg: var(--bs-primary);
}
</style>