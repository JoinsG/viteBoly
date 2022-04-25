<template>
  <div class="flex-wrap">
    <div class="left">
      <ComListsDrag></ComListsDrag>
    </div>
    <div class="content">
      <nested-draggable
        class="main-page"
        :class="{
          'hide-class': hide,
        }"
        :tasks="list"
        :enabled="enabled"
        :chooseAcItem="chooseAcItem"
        drageIndex="0"
        @changeEnabled="changeEnabled"
        @getChooseItemOption="getChooseItemOption"
        @setWeakChart="setWeakChart"
        @setDraggeDom="setDraggeDom"
        @getDraggeDom="getDraggeDom"
        @filterList="filterList"
      />
    </div>
    <div class="right">
      <opItem
        type="style"
        :copyItem="copyItem.style"
        :current="copyItem.style"
      ></opItem>
      <opItem
        type="chart"
        :copyItem="copyItem.chart"
        :current="copyItem.chart"
      ></opItem>
      <opItem
        type="data"
        :copyItem="copyItem.data"
        :current="copyItem.data"
      ></opItem>
    </div>
  </div>
  <!-- <el-button @click="hide = !hide">隐藏</el-button> -->
  <el-button @click="changeDisable">隐藏</el-button>
  <el-button @click="getOptoins">获取配置</el-button>
  <el-drawer
    v-model="drawer"
    :with-header="false"
  >
    <seriesData></seriesData>
  </el-drawer>
  <!-- <SquareVue v-model:dataLists="dataLists"></SquareVue> -->
</template>

<script lang='ts'>
import SquareVue from '../../components/VueDraggable/Square.vue'
import nestedDraggable from './nested.vue'
import opItem from './opitem.vue'
import DomeEchartWrap from './DomeEchartWrap.vue'
import * as DragMenthod from './utils/dragMenthod'
import { checkValType, checkValNum, checkPrototypeVal } from './utils/utils'
import ComListsDrag from './comListsDrag.vue'
import seriesData from '@/components/VueDraggable/seriesData.vue'
import {
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
  watchEffect,
} from 'vue'
import DraggableA from 'vuedraggable'
import _ from 'lodash'
export default defineComponent({
  name: 'Draggable',
  setup: () => {
    let enabled = ref(true)
    let changeEnabled = function (value) {
      enabled.value = value
    }
    let chartWeak = new WeakMap() //图表实例
    let draggeDomWeak = new WeakMap() //添加拖拽元素的Dom和对应的tasks数据
    let domeEchartWrap = ref(null)
    let chooseAcItem = ref({})
    //配置
    let copyItem = reactive({
      style: {},
      chart: {},
      data: {},
    })
    let getChooseItemOption = function (value) {
      console.log(chooseAcItem.value === value)
      console.log(value)

      if (chooseAcItem.value === value) {
        return
      }
      let { style, chart, data } = value.defineConfig
      // console.log(draggeDomWeak.get(value))
      chooseAcItem.value = value
      copyItem.style = style ?? {}
      copyItem.chart = chart ?? {}
      copyItem.data = data ?? {}
      // opItem.value = value.style ?? {}
    }
    let setWeakChart = function (value, el) {
      console.log(value)
      // chartWeak.set(value.style, el)
      // chartWeak.set(value.chart, el)
      chartWeak.set(value.defineConfig.chart, el)
      chartWeak.set(value.defineConfig.style, el)
      value.defineConfig.data && chartWeak.set(value.defineConfig.data, el)
    }
    let setDraggeDom = function (value, el) {
      console.log(value)
      console.log(el)
      draggeDomWeak.set(el, value)
    }
    let getDraggeDom = function (value, el) {
      let v = draggeDomWeak.get(el)
      console.log(v)
    }
    let list = reactive([])

    let setOpKeyVal = function ({ v: value, key: nextKey, type, item }) {
      console.log(value, nextKey, type)
      console.log(item)

      console.log(chartWeak.get(item))
      if (type === 'style') {
        if (
          [
            'padding',
            'margin',
            'border.radius',
            'border.width',
            'border.color',
            'border.style',
          ].includes(nextKey)
        ) {
          // _.set(chooseAcItem.value[type], `${nextKey}`, checkValType({ value, key: nextKey }))
          setMarginPaddingRadius(value, nextKey, type)
        } else {
          _.set(
            chooseAcItem.value[type],
            `${nextKey}`,
            checkValType({ value, key: nextKey })
          )
        }
        if (chartWeak.get(item)) {
          setTimeout(() => {
            chartWeak.get(item).resizeChart()
          }, 1000)
        }
      } else {
        _.set(
          chooseAcItem.value[type],
          `${nextKey}`,
          checkValType({ value, key: nextKey })
        )
        let obj = {}
        _.set(obj, `${nextKey}`, value)
        let checkObjVal = function (valO) {
          let [key, val] = Object.entries(valO)[0]
          if (checkPrototypeVal({ val, type: 'Array' })) {
            for (let index = 0; index < val.length; index++) {
              console.log(val[index])
              if (!val[index]) {
                val[index] = {}
              }
            }
          }
        }
        checkObjVal(obj)
        chartWeak.get(item).setEchartOption(obj)
      }
    }
    let setMarginPaddingRadius = (value, key, type) => {
      let firstKey = key.replace(/\./, '-')
      let typeLists = ['[object Array]']
      if (typeLists.includes(Object.prototype.toString.call(value))) {
        _.set(
          chooseAcItem.value[type],
          `${firstKey}`,
          value.map((val) => val + 'px').join(' ')
        )
      } else {
        _.set(
          chooseAcItem.value[type],
          `${firstKey}`,
          checkValType({ value, key: firstKey.split('-').pop() })
        )
      }
    }

    provide('setOpKeyVal', setOpKeyVal)
    provide('draggeDomWeak', draggeDomWeak)
    provide('enabled', enabled.value)

    let filterList = function (indexStr) {
      let val = list
      indexStr.split('').forEach((index) => {
        val = val[index]
      })
      console.log(val)

      // val.tasks = val.tasks.filter((item) => item.name !== '占位')
    }
    let hide = ref(false)
    let dataLists = ref([0, 0, 0, 0])
    let changeDisable = function (indexStr) {
      list[0].defineConfig.draggableOptions.disabled = true
    }
    let getOptoins = function (indexStr) {
      console.log(list)
    }
    let drawer = ref(true)
    return {
      drawer,
      list,
      copyItem,
      getChooseItemOption,
      domeEchartWrap,
      setWeakChart,
      enabled,
      changeEnabled,
      filterList,
      setDraggeDom,
      getDraggeDom,
      hide,
      dataLists,
      chooseAcItem,
      draggeDomWeak,
      changeDisable,
      getOptoins,
      ...DragMenthod,
    }
  },
  components: {
    nestedDraggable,
    DraggableA,
    opItem,
    DomeEchartWrap,
    SquareVue,
    ComListsDrag,
    seriesData
  },
})
</script>
<style scoped>
.main-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
:deep(.main-page) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.flex-wrap {
  display: flex;
}
.content {
  flex-grow: 1;
  background-color: #080826;
  padding: 10px;
}

:deep(.content *) {
  box-sizing: border-box;
}

:deep(.flex-wrap .dragArea) {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
}

:deep(.hide-class .progress) {
  visibility: hidden;
}
:deep(.el-collapse-item__content) {
  padding-bottom: 0;
}
:deep(.ac-item) {
  outline: 1px solid rgb(40, 86, 213);
}

.right,
.left {
  width: 200px;
  flex-shrink: 0;
}
</style>