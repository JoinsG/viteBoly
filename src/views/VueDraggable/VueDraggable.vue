<template>
  <div class="flex-wrap">
    <div class="left">
      <ComListsDrag></ComListsDrag>
    </div>
    <div class="content">
      <nested-draggable
        class="main-page"
        :class="{ 'hide-class': hide }"
        :tasks="list"
        :enabled="enabled"
        drageIndex="0"
        @changeEnabled="changeEnabled"
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
  <el-drawer v-model="drawer" :with-header="false">
    <seriesData></seriesData>
  </el-drawer>
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
  computed,
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
      console.log(item)
      console.log(useUserStoreConst.chartWeak.get(item))
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
        options.forEach((item) => {
          _.set(obj, `${item.key}`, item.data)
        })
        setTimeout(() => {
          useUserStoreConst.chartWeak
            .get(useUserStoreConst.copyItem.chart)
            .setEchartOption(obj)
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

    let filterList = function (indexStr) {
      let val = list
      indexStr.split('').forEach((index) => {
        val = val[index]
      })
      console.log(val)

      // val.tasks = val.tasks.filter((item) => item.name !== '占位')
    }
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

    // setTimeout(() => {
    //   drawer.value = true
    // }, 4000)

    let copyItem = computed(() => {
      return useUserStoreConst.copyItem
    })
    return {
      drawer,
      list,
      copyItem,
      // getChooseItemOption,
      domeEchartWrap,
      enabled,
      changeEnabled,
      filterList,
      hide,
      dataLists,
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
    seriesData,
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