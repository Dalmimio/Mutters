
<script>
import DrawingToolbar from './DrawToolBar.vue'

export default {
  name: 'App',
  components: {
    DrawingToolbar,
  },
  data: function () {
    return {
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false,
      color: 'rgb(0,0,0)',
      drawStyle: 'freehand',
      lineWidth: 5
    }
  },
  methods: {
    draw(e) {
      if (this.isDrawing) {
        if (this.drawStyle === 'freehand') {
          this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
          this.x = e.offsetX
          this.y = e.offsetY
        }
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX
      this.y = e.offsetY
      this.isDrawing = true
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        if (this.drawStyle === 'freehand') {
          this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
          this.x = 0
          this.y = 0
          this.isDrawing = false
        } else if (this.drawStyle === 'rectangle') {
          this.drawRect(this.x, this.y, e.offsetX, e.offsetY)
          this.isDrawing = false
        } else if (this.drawStyle === 'circle') {
          this.drawCircle(this.x, this.y, e.offsetX, e.offsetY)
          this.isDrawing = false
        } else if (this.drawStyle === 'triangle') {
          this.drawTriangle(this.x, this.y, e.offsetX, e.offsetY)
          this.isDrawing = false
        }
      }
    },
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas
      ctx.beginPath()
      ctx.strokeStyle = this.color
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
    },
    drawRect(x1, y1, x2, y2) {
      let ctx = this.canvas
      ctx.beginPath()
      ctx.strokeStyle = this.color
      ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
      ctx.stroke();
    },
    drawCircle(x1, y1, x2, y2){
      let ctx = this.canvas
      ctx.beginPath();
      let radius = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
      ctx.strokeStyle = this.color
      ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
      ctx.stroke(); //fill -> forma rellena --- stroke -> solo linea
    },
    drawTriangle(x1, y1, x2, y2){  
      let ctx = this.canvas       
      ctx.strokeStyle = this.color
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.lineTo(x1 * 2 - x2 , y2);
      ctx.closePath(); 
      ctx.stroke()
    },
    setDrawingColor(newColor) {
      this.color = newColor
    },
    setDrawingStyle(styleType) {
      this.drawStyle = styleType
    },
   
  },
  mounted() {
    let canvas = this.$refs['myCanvas']
    canvas.width = window.innerWidth * 0.5
    canvas.height = window.innerHeight *0.8
    this.canvas = canvas.getContext('2d')
    console.log(this.canvas)
  },
}
</script>
<template>
    <div id="appaint">
      <canvas
        ref="myCanvas"
        id="myCanvas"
        @mousemove="draw"
        @mousedown="beginDrawing"
        @mouseup="stopDrawing"
        @mouseout="stopDrawing"
      ></canvas>
      <DrawingToolbar 
      @color-selection="setDrawingColor" @style-selection="setDrawingStyle"/>
    </div>
  </template>
  
  
  
  <style>
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    #appaint {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      padding: 1rem;
     
    }
    #myCanvas {
      border: 1px solid grey;
      background-color: #FFF;
      margin: 5px 0px 5px 5px;
      border-radius: 1rem;
    }
  </style>