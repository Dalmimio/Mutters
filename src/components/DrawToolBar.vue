<template>
    <div id="toolbar">
      <div id="color-selector">
        <ColorButton
          @btn-click="toggleColorChoices"
          :backColor="backColor"
          :textColor="textColor"
        />
        <div v-show="toggleColorMenu" id="color-options">
          <div
            class="color-option"
            v-for="(color, index) in colorOptions"
            :key="index"
            :style="{ background: color }"
            @click="setDrawingColor"
          ></div>
        </div>
      </div>
      <input type="range" name="" id="rangeLine">
      <div id="style-selector">
        <button @click="selectStyle" class="style-button" value="freehand">
          Brush
        </button>
        <button @click="selectStyle" class="style-button" value="rectangle">
          Rectangle
        </button>
        <button @click="selectStyle" class="style-button" value="circle">
          Circle
        </button>
        <button @click="selectStyle" class="style-button" value="triangle">
          Triangle
        </button>
        <label for="fillColor">
          Fill Color
          <input v-model="line" @click="selectWidth" type="checkbox" id="fillColor">
        </label>
        
      </div>
    </div>
  </template>
  
  <script>
    import ColorButton from './ColorBtn.vue'
  
    export default {
      name: 'DrawingToolbar',
      components: {
        ColorButton,
      },
      data() {
        return {
          backColor: '#000000',
          textColor: '#FFFFFF',
          toggleColorMenu: false,
          colorOptions: [
            '#FFFF00',
            '#59FF00',
            '#267900',
            '#37AEAE',
            '#0100FF',
            '#7307A5',
            '#BA00FF',
            '#CC02AF',
            '#F50E02',
            '#F54602',
            '#F77F02',
            '#FAB302',
            '#000000',
            '#FFFFFF',
          ],
        }
      },
      methods: {
        toggleColorChoices() {
          this.toggleColorMenu = !this.toggleColorMenu
        },
        setDrawingColor(e) {
          let newColor = e.path[0].style.background
          this.$emit('color-selection', newColor)
          this.backColor = newColor
          this.toggleColorMenu = !this.toggleColorMenu
        },
        selectStyle(e) {
          this.$emit('style-selection', e.target.value)
        },
       selectWidth(e){
        this.$emit('width-selected', e.target.checked)
       }
      },
    }
  </script>
  
  <style scoped>
    #toolbar {
      width: 20vw;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: lightblue;
    }
    #color-selector {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 30%;
      width: 100%;
      z-index: 1;
    }
    #color-button {
      height: 20%;
      width: 10rem;
      border-radius: 5px;
      border: none;
      margin: 10px;
    }
    #color-options {
      height: 45%;
      width: 90%;
      display: flex;
      flex-wrap: wrap;
    }
    .color-option {
      flex: 1 0 20%;
      height: 50%;
      margin: 1px;
      background-color: red;
    }
    #style-selector {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 40%;
      width: 100%;
    }
  
    .style-button {
      height: 20%;
      width: 10rem;
      margin: 5px;
      border-radius: 5px;
      border: none;
    }
    label{
      background-color: red;
    }
    #rangeLine{
      width: 80%;
      align-self: center;
      color: red;
    }
    
    
  </style>
  