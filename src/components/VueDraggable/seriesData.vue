<template>
  <div class="demo-collapse">
    <el-button type="primary" size="small">增加</el-button>
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      v-for="(item, index) in seriesLists"
    >
      <el-collapse-item title="Consistency" :name="item">
        <template #title>
          <el-select
            size="small"
            v-model="item.type"
            class="m-2"
            placeholder="Select"
            @change="(val) => typeChangeHandler(val, index)"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
        <ColItem
          :data="getDefaultLine[index]"
          type="chart"
          :pkey="`series[${index}]`"
        ></ColItem>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang='ts'>
import { useUserStore } from '../../store-pinia/draggable'
import _ from 'lodash'
import {
  defineComponent,
  ref,
  inject,
  computed,
  reactive,
  onMounted,
  onMounted,
  watchEffect,
  watch,
} from 'vue'
import ColItem from '@/components/VueDraggable/colItem.vue'
import line from '@/views/VueDraggable/chartOption/series/line.js'
import bar from '@/views/VueDraggable/chartOption/series/bar.js'
import pie from '@/views/VueDraggable/chartOption/series/pie.js'
export default defineComponent({
  name: '',
  props: {
    drawer: {},
  },
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
        name: '平滑程度',
        key: 'smooth',
        value: 0,
        type: 'silder',
        bind: {
          min: 0,
          max: 1,
          step: 0.1,
          showInput: true,
        },
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
    let getDefaultLineHandler = function (val) {
      switch (val.mode) {
        case 'lineSingle':
          return ref(JSON.parse(JSON.stringify(line))).value
        case 'barSingle':
          return ref(JSON.parse(JSON.stringify(bar))).value
        case 'pieSingle':
          return ref(JSON.parse(JSON.stringify(pie))).value
      }
    }
    let getDefaultLine = reactive([])

    let typeChangeHandler = function (v, index) {
      setValHandler({
        v,
        key: `series[${index}].type`,
        type: 'chart',
        options: [
          {
            key: `series[${index}]`,
            data: useUserStoreConst.getChartSeries[index],
          },
        ],
      })
    }
    let setItemopValHandler = function (itemOp, index, key = null) {
      let reKey = key ? `${key}.` : ''
      for (let i = 0; i < itemOp.length; i++) {
        let item = itemOp[i]
        if (item.children) {
          setItemopValHandler(item.children, index, reKey + item.key)
          continue
        }
        console.log(
          _.get(useUserStoreConst.getChartSeries[index], `${reKey}${item.key}`),
          reKey
        )

        item.value =
          _.get(
            useUserStoreConst.getChartSeries[index],
            `${reKey}${item.key}`
          ) ?? item.value
      }
    }
    let seriesLists = useUserStoreConst.getChartSeries
    let chooseAcItem = useUserStoreConst.getChooseChartItem
    console.log(seriesLists)
    console.log(props.drawer)
    onMounted(() => {
      getInitSeriesHandler()
    })
    let getInitSeriesHandler = function () {
      seriesLists.forEach((item, index) => {
        let itemOp = getDefaultLineHandler(chooseAcItem)
        setItemopValHandler(itemOp, index)
        getDefaultLine.push(itemOp)
      })
    }
    return {
      getDefaultLine,
      seriesLists,
      activeNames,
      handleChange,
      options,
      defaultLine,
      typeChangeHandler,
    }
  },
  components: { ColItem },
})
</script>

<style></style>