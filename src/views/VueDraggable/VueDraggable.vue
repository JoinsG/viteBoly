<template>
  <div class="flex-wrap">
    <div class="left">
      <ComListsDrag></ComListsDrag>
    </div>
    <div class="content">
      <div  style="width: 1920px; height: 1080px;transform:scale(.1);transform-origin: left top;">
        <nested-draggable
        class="main-page"
        :class="{ 'hide-class': hide }"
        :tasks="list"
        :enabled="enabled"
        drageIndex="0"
      />
      </div>
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
  <div class="dustbin">
    <DraggableA
      :list="dustbin"
      :group="{ name: 'g1' }"
      item-key="name"
      ghostClass="small-dom"
      class="dustbin-wrap"
    >
       <template #item="{ element }">
          <div class="lists-dom">
            <p>{{ element.name }}</p>
          </div>
        </template>
    </DraggableA>
  </div>
  <!-- <el-button @click="hide = !hide">隐藏</el-button> -->
  <el-button @click="changeDisable">隐藏</el-button>
  <el-button @click="getOptoins">获取配置</el-button>
  <el-drawer v-model="drawer" :with-header="false" :destroy-on-close="true">
    <seriesData :drawer="drawer"></seriesData>
  </el-drawer>
  <testChart></testChart>
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
import DraggableA from 'vuedraggable'
import testChart from '@/views/testExplam/testChart.vue'
import * as specialHandMethod from './utils/attributeSpecialHandling.js'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onMounted,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
  watchEffect,
} from 'vue'
import DraggableA from 'vuedraggable'
import _ from 'lodash'
import { useUserStore } from '../../store-pinia/draggable'
export default defineComponent({
  name: 'Draggable',
  setup: () => {
    const useUserStoreConst = useUserStore()
    console.log(useUserStoreConst.name)
    let enabled = ref(true)
    let changeEnabled = function (value) {
      enabled.value = value
    }
    let domeEchartWrap = ref(null)

    let list = reactive([])
    let setOpKeyVal = function ({
      v: value,
      key: nextKey,
      type,
      item,
      options = [],
    }) {
      console.log(value, nextKey, type)
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
          setMarginPaddingRadius(value, nextKey, type)
        } else {
          _.set(
            useUserStoreConst.chooseAcItem[type],
            `${nextKey}`,
            checkValType({ value, key: nextKey })
          )
        }
        if (useUserStoreConst.chartWeak.get(item)) {
          setTimeout(() => {
            useUserStoreConst.chartWeak.get(item).resizeChart()
          }, 1000)
        }
      } else {
        _.set(
          useUserStoreConst.chooseAcItem[type],
          `${nextKey}`,
          checkValType({ value, key: nextKey })
        )
        let obj = {}
        _.set(obj, `chart.${nextKey}`, value)
        options.forEach((item) => {
          _.set(obj, `${item.key}`, item.data)
        })
        console.log(options)
        _.set(obj, 'chart', useUserStoreConst.getChooseChartItem.chart)
        setTimeout(() => {
          useUserStoreConst.chartWeak
            .get(useUserStoreConst.copyItem.chart)
            .setEchartOption(obj.chart)
        }, 100)
        console.log(obj)
        console.log(
          useUserStoreConst.chartWeak.get(useUserStoreConst.copyItem.chart)
        )
        // console.log(chartWeak.get(item).setEchartOption);
      }
    }
    let setMarginPaddingRadius = (value, key, type) => {
      let firstKey = key.replace(/\./, '-')
      let typeLists = ['[object Array]']
      if (typeLists.includes(Object.prototype.toString.call(value))) {
        _.set(
          useUserStoreConst.chooseAcItem[type],
          `${firstKey}`,
          value.map((val) => val + 'px').join(' ')
        )
      } else {
        _.set(
          useUserStoreConst.chooseAcItem[type],
          `${firstKey}`,
          checkValType({ value, key: firstKey.split('-').pop() })
        )
      }
    }

    provide('setOpKeyVal', setOpKeyVal)
    provide('enabled', enabled.value)

    let hide = ref(false)
    let drawer = ref(false)
    let dataLists = ref([0, 0, 0, 0])
    let changeDisable = function (indexStr) {
      // list[0].defineConfig.draggableOptions.disabled = true
      drawer.value = true
    }
    let getOptoins = function (indexStr) {
      console.log(list)
    }

    let copyItem = computed(() => {
      return useUserStoreConst.copyItem
    })
    ////垃圾箱
    let dustbin = reactive([])
    return {
      drawer,
      list,
      copyItem,
      domeEchartWrap,
      enabled,
      changeEnabled,
      hide,
      dataLists,
      changeDisable,
      getOptoins,
      dustbin,
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
    seriesData,
    testChart
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
  min-height: 10px;
  min-width: 10px;
}

:deep(.small-dom) {
  width: 10px !important;
  height: 10px !important;
  border: 1px dashed blue;
  overflow: hidden;
}
:deep(.content .hover-dom) {
  outline: 2px solid rgb(22, 103, 232);
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

.dustbin{
  width: 100px;
  height: 100px;
  border: 1px solid deeppink;
  overflow: hidden;
}
.dustbin-wrap{
  width: 100%;
  height: 100%;
}
</style>