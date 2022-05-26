<template>
  <div :id="id" class="echart-wrap"></div>
</template>

<script lang='ts'>
import * as echarts from 'echarts'
// import '@/assets/js/bmap.js'
// import 'echarts/extension/bmap/bmap.js'
// require('echarts/extension/bmap/bmap.js')
import {
  defineComponent,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
  watchEffect,
  onBeforeUnmount,
  nextTick,
  defineExpose,
  markRaw,
} from 'vue'
export default defineComponent({
  name: 'EchartWrap',
  expose: ['chart', 'setEchartOption', 'resizeChart'],
  props: {
    id: {
      type: String,
      default: new Date().getTime() + '',
    },
  },
  setup: (props, ctx) => {
    console.log(1111)
    let chart = ref(false)
    let initEchart = () => {
      chart.value = markRaw(echarts.init(document.getElementById(props.id)))
    }
    let setEchartOption = (value = {}) => {
      console.log(value)

      nextTick(() => {
        setTimeout(() => {
          chart.value.setOption(value,'replaceMerge')
          // resizeChart()
        }, 100)
      })
      return chart
    }
    let registerMap = (data, op = {}) => {
      echarts.registerMap('mapData', { geoJSON: data })
    }
    let resizeChart = (data, op = {}) => {
      console.log(chart.value)
      nextTick(() => {
        chart.value.resize()
      })
    }
    onMounted(() => {
      initEchart()
      //   window.addEventListener('resize', resizeChart)
    })
    onBeforeUnmount(() => {
      console.log(222222)
      if (!chart.value) {
        return
      }
      chart.value?.dispose()
      chart.value = false
    })
    return {
      chart,
      registerMap,
      setEchartOption,
      resizeChart,
    }
  },
})
</script>

<style scoped>
.echart-wrap {
  height: 100%;
  width: 100%;
}

</style>
