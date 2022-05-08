<template>
  <div class="demo-collapse">
    <el-button type="primary" size="small">增加</el-button>
    <el-collapse v-model="activeNames" @change="handleChange" v-for="(item,index) in seriesLists">
      <el-collapse-item title="Consistency" name="1">
        <template #title>
          <el-select
            size="small"
            v-model="value"
            class="m-2"
            placeholder="Select"
            @change="changHandler"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
        <ColItem :data="getDefaultLine()" type="chart" :pkey="`series[${index}]`"></ColItem>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang='ts'>
import { useUserStore } from '../../store-pinia/draggable'

import { defineComponent, ref, inject, computed } from 'vue'
import ColItem from '@/components/VueDraggable/colItem.vue'
export default defineComponent({
  name: '',
  setup: (props, ctx) => {
    const useUserStoreConst = useUserStore()
    let setValHandler = inject('setOpKeyVal')
    const activeNames = ref(['1'])
    const handleChange = (val: string[]) => {
      console.log(val)
    }
    const options = [
      {
        value: 'line',
        label: '折线',
      },
      {
        value: 'bar',
        label: '柱状',
      },
    ]
    let defaultLine = ref([
      {
        name: '对应X轴',
        key: 'xAxisIndex',
        value: 0,
        type: 'input',
      },
      {
        name: '对应Y轴',
        key: 'yAxisIndex',
        value: 0,
        type: 'input',
      },
      {
        name: '堆叠组名',
        key: 'stack',
        value: '',
        type: 'input',
      },
      {
        name: '是否梯线',
        key: 'step',
        value: false,
        type: 'select',
        select: [
          {
            name: '不显示',
            value: false,
          },
          {
            name: '前部',
            value: 'start',
          },
          {
            name: '中部',
            value: 'middle',
          },
          {
            name: '尾部',
            value: 'end',
          },
        ],
      },
      {
        name: '标签',
        key: 'label',
        children: [
          {
            key: 'show',
            name: '是否显示',
            value: false,
            type: 'switch',
          },
          {
            key: 'color',
            name: '颜色',
            value: '#000',
            type: 'color',
          },
          {
            key: 'fontSize',
            name: '字体大小',
            value: 12,
            type: 'input',
          },
        ],
        type: 'next',
      },
      {
        name: '线条样式',
        key: 'lineStyle',
        children: [
          {
            key: 'width',
            name: '宽度',
            value: 2,
            type: 'input',
          },
          {
            key: 'color',
            name: '颜色',
            value: '#000',
            type: 'color',
          },
        ],
        type: 'next',
      },
    ])
    let getDefaultLine = function () {
      return ref(JSON.parse(JSON.stringify(defaultLine.value))).value
    }
    let changHandler = function (v) {
      setValHandler({
        v,
        key: 'series[0].type',
        type: 'chart',
      })
    }
    let seriesLists = useUserStoreConst.getChartSeries
    return {
      getDefaultLine,
      seriesLists,
      activeNames,
      handleChange,
      options,
      defaultLine,
      changHandler,
    }
  },
  components: { ColItem },
})
</script>

<style></style>