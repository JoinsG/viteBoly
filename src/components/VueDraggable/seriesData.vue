<template>
  <div class="demo-collapse">
    <el-button
      type="primary"
      v-if="checkShowChartType()"
      size="small"
      @click="addSeriesChart"
      >增加</el-button
    >
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      v-for="(item, index) in seriesLists"
    >
      <div>
        <el-collapse-item title="Consistency" :name="item.dataKeyId">
          <template #title>
            <el-select
              size="small"
              v-model="item.type"
              class="m-2"
              placeholder="Select"
              @change="(val) => typeChangeHandler(val, index)"
              v-if="chooseAcItem.mode === 'custom'"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span v-else>{{ item.type }}</span>
            <el-button
              class="m-del-btn"
              type="danger"
              @click.stop="delSeriesRow(index)"
              :icon="Delete"
              circle
            />
          </template>
          <ColItem
            :data="getDefaultLine[index]"
            type="chart"
            :pkey="`series[${index}]`"
          ></ColItem>
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>

<script lang='ts'>
import { useUserStore } from '../../store-pinia/draggable'
import { Delete } from '@element-plus/icons-vue'

import _ from 'lodash'
import {
  defineComponent,
  ref,
  inject,
  computed,
  reactive,
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
        type: 'slider',
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
      switch (val.type) {
        case 'line':
          return ref(JSON.parse(JSON.stringify(line))).value
        case 'bar':
          return ref(JSON.parse(JSON.stringify(bar))).value
        case 'pie':
          return ref(JSON.parse(JSON.stringify(pie))).value
      }
    }
    let getDefaultLine = reactive([])

    let typeChangeHandler = function (v, index) {
      getDefaultLine[index] = getDefaultLineHandler({ type: v })
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
    let setItemopValHandler = function (itemOp, index, key = '') {
      let reKey = key
      for (let i = 0; i < itemOp.length; i++) {
        reKey = key
        let item = itemOp[i]
        if (item.key && !reKey) {
          reKey = item.key
        } else if (item.key && reKey) {
          if (/\[[0-9]+\]/.test(item.key)) {
            reKey += `${item.key}`
          } else {
            reKey += `.${item.key}`
          }
        }
        if (item.children) {
          setItemopValHandler(item.children, index, reKey)
          continue
        } else {
          // console.log(
          //   _.get(useUserStoreConst.getChartSeries[index], `${reKey}`),
          //   reKey
          // )
          let value = _.get(useUserStoreConst.getChartSeries[index], `${reKey}`)
          item.value = checkChartValue({ key: reKey, value: value })
          // console.log(item.value)
        }
      }
    }
    //对部分数据单独处理
    function checkChartValue({ key, value }) {
      if (/(radius.+?)/.test(key)) {
        return +value.replace('%', '')
      }
      return value
    }
    let seriesLists = useUserStoreConst.getChartSeries
    let chooseAcItem = useUserStoreConst.getChooseChartItem
    console.log(seriesLists)
    console.log(props.drawer)
    onMounted(() => {
      getInitSeriesHandler()
    })
    //初始化配置数据
    let getInitSeriesHandler = function () {
      getDefaultLine.splice(0, 99)
      seriesLists.forEach((item, index) => {
        let itemOp = getDefaultLineHandler(item)
        setItemopValHandler(itemOp, index)
        getDefaultLine.push(itemOp)
      })
    }

    //增加数据
    let addSeriesChart = function () {
      let itemOp = _.cloneDeep(seriesLists[0] ?? [])
      console.log(itemOp)
      itemOp.dataKeyId = new Date().getTime()
      useUserStoreConst.addChartSeries(itemOp)
      let index = seriesLists.length - 1
      setValHandler({ v: itemOp, type: 'chart', key: `series[${index}]` })
      getInitSeriesHandler()
    }
    // 删除数据
    let delSeriesRow = function (index) {
      useUserStoreConst.delChartSeries(index)
      console.log(seriesLists)
      setValHandler({ v: seriesLists, type: 'chart', key: `series` })
      getInitSeriesHandler()
    }

    //检查图表是否支持增加按钮
    let checkShowChartType = function () {
      let chartListsType = [
        'chartLineBar',
        'lineSingle',
        'barSingle',
        'barGroup',
        'barStack',
      ]
      console.log(chooseAcItem?.chartType,11111111)
      return chartListsType.includes(chooseAcItem?.chartType ?? '')
    }
    return {
      checkShowChartType,
      getDefaultLine,
      seriesLists,
      activeNames,
      handleChange,
      options,
      typeChangeHandler,
      chooseAcItem,
      addSeriesChart,
      Delete,
      delSeriesRow,
    }
  },
  components: { ColItem },
})
</script>

<style scoped>
.m-del-btn {
  margin-left: auto;
}
:deep(.el-collapse-item__header .el-collapse-item__arrow) {
  margin-left: 5px;
}
</style>