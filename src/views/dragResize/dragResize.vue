<template>
  <div class="container-parent" style="width: 600px; height: 400px">
    <!-- <VueDragResize
      :isActive="true"
      :w="200"
      :h="200"
      :parentW="600"
      
      :drag-handle="'.drag'"
      v-on:resizing="resize"
      v-on:dragging="resize"
    >
      <h3>Hello World!</h3>
      <p>{{ position.top }} х {{ position.left }}</p>
      <p>{{ position.width }} х {{ position.height }}</p>
    </VueDragResize>
     -->
    <VueDragResize
      :isActive="true"
      :w="200"
      :h="200"
      :aspectRatio="true"
      :parentLimitation="true"
      v-on:resizing="resize"
      v-on:dragging="resize"
    >
      <div class="drag" style="width: 100px; height: 200px"></div>
      <div class="dragA" style="width: 100px; height: 200px"></div>
    </VueDragResize>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import VueDragResize from 'vue-drag-resize'
export default defineComponent({
  name: 'dragResize',
  setup: () => {
    let position = reactive({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    })
    function resize(newRect:any) {
      position.width = newRect.width
      position.height = newRect.height
      position.top = newRect.top
      position.left = newRect.left
    }
    return { position, resize }
  },
  components: {
    VueDragResize,
  },
})
</script>

<style>
.container-parent {
  border: 1px solid deeppink;
  position: relative;
  margin-left: 100px;
}
.drag {
  position: absolute;
  left: 800px;
  border: 1px solid deeppink;
}
.dragA {
  position: absolute;
  left: 800px;
  top: 600px;
  border: 1px solid deeppink;
}
</style>
