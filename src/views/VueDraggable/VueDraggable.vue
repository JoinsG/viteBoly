<template>
  <div class="flex-wrap">
    <div class="left">
      <DraggableA
        :list="opLists"
        :group="{ name: 'g1', pull: 'clone', put: false }"
        fallbackClass="test"
        item-key="name"
        :clone="cloneDog"
      >
        <!-- @start="dragStart"
        @end="dragEnd"
        :move="dragMove" -->
        <template #item="{ element }">
          <div>
            <p>{{ element.name }}</p>
          </div>
        </template>
      </DraggableA>
    </div>
    <div class="content">
      <nested-draggable
        class="main-page"
        :class="
        {
          'hide-class':hide
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
      <opItem type="style" :copyItem="copyItem.style"></opItem>
      <opItem type="chart" :copyItem="copyItem.chart"></opItem>
    </div>
  </div>
  <el-button @click="hide=!hide">隐藏</el-button>
</template>

<script lang='ts'>
import nestedDraggable from './nested.vue'
import opItem from './opitem.vue'
import DomeEchartWrap from './DomeEchartWrap.vue'
import * as DragMenthod from './utils/dragMenthod'
import { checkValType, checkValNum } from './utils/utils'
import { opLists, zhanwei } from './utils/domComLists'
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
import * as chartList from './chartOption/index.js'
import _ from 'lodash'
export default defineComponent({
  name: 'Draggable',
  setup: () => {
    console.log(chartList)
    let enabled = ref(true)
    let changeEnabled = function (value) {
      enabled.value = value
    }
    let clickSetItem = null
    let chartWeak = new WeakMap() //图表实例
    let draggeDomWeak = new WeakMap() //添加拖拽元素的Dom和对应的tasks数据
    let domeEchartWrap = ref(null)
    let chooseAcItem = ref({})
    let nameIndex = ref(5)
    let opItem = ref({})
    let chartItem = ref({})
    let cloneDog = function (element) {
      if (element.type === 'chart') {
        return {
          id: nameIndex.value++,
          name: 'chart' + nameIndex.value++,
          type: 'chart',
          style: {
            width: '500px',
            height: '500px',
          },
          chart: {
            ..._.cloneDeep(chartList[element.name]),
          },
        }
      }
      return {
        id: nameIndex.value++,
        name: 'chart' + nameIndex.value++,
        tasks: [{ ...zhanwei }],
        style: {},
        ...JSON.parse(JSON.stringify(element)),
      }
    }
    let getChooseItemOption = function (value) {
      console.log(chooseAcItem.value === value);
      
      if ( chooseAcItem.value === value) {
        return
      }
      clickSetItem = value
      chooseAcItem.value = value
      copyItem.style = {}
      copyItem.chart = {}
      opItem.value = value.style ?? {}
      chartItem.value = value.chart ?? {}
      console.log(opItem.value)
      console.log(chartItem.value)
    }
    let setWeakChart = function (value, el) {
      console.log(value)
      chartWeak.set(value.style, el)
      chartWeak.set(value.chart, el)
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
    let list = reactive([
      // {
      //   name: 'task 1',
      //   tasks: [
      //     // {
      //     //   name: 'task 2',
      //     //   tasks: [],
      //     //   style: {
      //     //     width: '100px',
      //     //     border: '1px solid red',
      //     //     padding: '10px 10px 10px 10px',
      //     //   },
      //     // },
      //     // {
      //     //   name: 'task 3',
      //     //   tasks: [
      //     //     {
      //     //       name: 'task 4',
      //     //       tasks: [],
      //     //       style: {
      //     //         width: '20px',
      //     //         border: '1px solid red',
      //     //         padding: '10px 10px 10px 10px',
      //     //       },
      //     //     },
      //     //   ],
      //     //   style: {
      //     //     width: '10px',
      //     //     border: '1px solid red',
      //     //     padding: '10px 10px 10px 10px',
      //     //   },
      //     // },
      //     // {
      //     //   name: 'task 5',
      //     //   tasks: [],
      //     //   style: {
      //     //     width: '40px',
      //     //     border: '1px solid red',
      //     //     padding: '10px 10px 10px 10px',
      //     //   },
      //     // },
      //   ],
      //   style: {
      //     width: '100%',
      //     height: '400px',
      //     border: '1px solid red',
      //     padding: '10px 10px 10px 10px',
      //   },
      // },
    ])
    //配置
    let copyItem = reactive({
      style: {},
      chart: {},
    })
    watch(
      opItem,
      (nVal, old) => {
        if (!nVal) return
        let enter = Object.entries(nVal)
        enter.forEach((item) => {
          let [key, value] = item
          switch (key) {
            case 'height':
            case 'width':
              copyItem.style[key] = checkValNum({ value, key })
              break
            case 'border':
              let borderList = value.split(' ')
              copyItem.style['border'] = {
                width: parseFloat(borderList[0]),
                style: borderList[1],
                color: borderList[2],
              }
              break
            case 'borderRadius':
              let borderRadiusList = value
                .split(' ')
                .map((val) => parseFloat(val))
              copyItem.style[key] = {
                topLeft: borderRadiusList[0],
                topRight: borderRadiusList[0],
                botLeft: borderRadiusList[0],
                botRight: borderRadiusList[0],
              }
              break
            case 'padding':
              let paddingList = value.split(' ').map((val) => parseFloat(val))
              copyItem.style[key] = {
                top: paddingList[0],
                right: paddingList[1],
                bottom: paddingList[2],
                left: paddingList[3],
              }
              break
          }
        })
      },
      {
        immediate: true,
      }
    )
    watch(chartItem, (nVal, old) => {
      if (!nVal) return
      let enter = Object.entries(nVal)
      enter.forEach((item) => {
        let [key, value] = item
        copyItem.chart[key] = value
      })
    })

    let setOpKeyVal = function ({ v: prekey, key: nextKey, type }) {
      let newKeyVal = prekey ? `${prekey}.${nextKey}` : nextKey
      console.log(newKeyVal)
      let value = _.get(copyItem[type], `${newKeyVal}`)
      let keys = newKeyVal.split('.').shift()
      if (['padding', 'margin', 'border'].includes(keys)) {
        let arr = Object.entries(copyItem[type][keys])
        opItem.value[keys] = arr
          .map((val) => {
            let [key, value] = val
            return checkValType({ value, key })
          })
          .join(' ')
      } else {
        if (type === 'style') {
          opItem.value[newKeyVal] = checkValType({ value, key: newKeyVal })
        }
        if (type === 'chart') {
          _.set(chartItem.value, newKeyVal, value)
        }
      }
      let style = chartWeak.get(opItem.value)
      let chart = chartWeak.get(chartItem.value)
      if (chart && style) {
        chart.resizeChart()
      }
      if (chart) {
        chart.setEchartOption(chartItem.value)
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
    return {
      cloneDog,
      opLists,
      list,
      opItem,
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
      chooseAcItem,
      ...DragMenthod,
    }
  },
  components: {
    nestedDraggable,
    DraggableA,
    opItem,
    DomeEchartWrap,
  },
})
</script>
<style scoped>
.main-page {
  height: 90vh;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.flex-wrap {
  display: flex;
}
.content {
  flex-grow: 1;
}
:deep(.content *) {
  box-sizing: border-box;
}
.chart-dom {
  width: 500px;
  height: 500px;
}

:deep(.flex-wrap .dragArea) {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
}


:deep(.hide-class .progress){
  visibility: hidden;
}
:deep(.ac-item){
  outline: 1px solid rgb(40, 86, 213);
}
</style>