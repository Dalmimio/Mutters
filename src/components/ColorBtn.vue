<script>
export default {
    name: 'ColorButton',
    props: {
        backColor: String,
        textColor: String,
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        }
    }
}
</script>
<template>
    <button @click='onClick' :style="{color: textColor, background: backColor}" id="color-button">Color Selector</button>
</template>

