<template>
  <div id="chart" ref="chart"></div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  name: '',
  setup: () => {
    let chart = ref(null)
    onMounted(() => {
      chart.value = echarts.init(document.getElementById('chart'))
      chart.value.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
          },
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
          },
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
          },
        ],
      })

      setTimeout(() => {
        console.log(2222222)
        chart.value.setOption({
          yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          xAxis: {
            type: 'value',
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
              },
            }
          ]
        },'replaceMerge')
      }, 2000)
    })
    return { chart }
  },
  components: {},
})
</script>

<style scoped>
#chart {
  width: 300px;
  height: 300px;
}
</style>