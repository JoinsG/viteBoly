<template>
  <canvas id="c"></canvas>
</template>

<script lang='ts'>
import { defineComponent, onMounted, watchEffect, ref, isRef } from 'vue'
import { fabric } from 'fabric'
export default defineComponent({
  name: 'Fabric',
  setup: () => {
    onMounted(() => {
      var canvas = new fabric.Canvas('c', {
        width: 500,
        height: 500,
        hoverCursor: null,
        moveCursor: null,
      })
      // Define an array with all fonts

      var textbox = new fabric.IText('Lorum ipsum dolor sit amet', {
        left: 50,
        top: 50,
        width: 300,
        fontSize: 20,
        selectable: false,
        evented: true,
        hoverCursor: null,
        moveCursor: null,
        editable: true,
        hasControls: false,
        selection: true,
      })
      canvas.add(textbox).setActiveObject(textbox)
      setTimeout(() => {
        console.log(canvas.item(0))
        console.log(textbox)
        // textbox.enterEditable()
        // canvas.item(0).isEditing = true
        canvas.item(0).enterEditing()
      }, 1000)
      textbox.onKeyUp((e) => {
        console.log(e)
      })
    })
    let ur: any = ref('1')
    const { data, error } = useFetch(ur)
    setTimeout(() => {
      ur.value = 2
      console.log(33)
    }, 3000)
    setTimeout(() => {
      data.value = 33
      console.log('data', 33)
      debugger
    }, 5000)
    function useFetch(url) {
      const data = ref(null)
      const error = ref(null)

      function doFetch() {
        console.log(2)
        // 在请求之前重设状态...
        data.value = null
        error.value = null

        let a = url.value + ''
        // unref() 解包可能为 ref 的值
        // setTimeout(() => {
        //   data.value = 1
        //   error.value = 2
        // }, 2000)
        // let s = data.value
      }

      if (isRef(url)) {
        // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
        watchEffect(doFetch)
      } else {
        // 否则只请求一次
        // 避免监听器的额外开销
        doFetch()
      }

      return { data, error }
    }

    return {}
  },
  components: {},
})
</script>

<style scoped>
#c {
  width: 500px;
  height: 500px;
}
</style>