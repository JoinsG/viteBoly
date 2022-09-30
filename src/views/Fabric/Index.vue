<template>
  <canvas id="c"></canvas>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import { fabric } from 'fabric'
export default defineComponent({
  name: 'Fabric',
  setup: () => {
    onMounted(() => {
      var canvas = new fabric.Canvas('c',{
        width:500,
        height:500,
        hoverCursor:null,
        moveCursor:null,
      })
      // Define an array with all fonts

      var textbox = new fabric.IText('Lorum ipsum dolor sit amet', {
        left: 50,
        top: 50,
        width:300,
        fontSize: 20,
        selectable:false,
        evented:true,
        hoverCursor:null,
        moveCursor: null,
        editable:true,
        hasControls:false,
        selection: true,
      })
      canvas.add(textbox).setActiveObject(textbox)
      setTimeout(() => {
        console.log(canvas.item(0))
        console.log(textbox)
        // textbox.enterEditable()
        // canvas.item(0).isEditing = true
        canvas.item(0).enterEditing()
      },1000)
      textbox.onKeyUp((e) => {
        console.log(e)
      })
    })

    return {}
  },
  components: {},
})
</script>

<style scoped>
#c{
    width: 500px;
    height: 500px;
}
</style>