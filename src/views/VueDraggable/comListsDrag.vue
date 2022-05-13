<template>
  <el-collapse v-model="activeNames" class="wrap-option">
    <el-collapse-item
      class="item"
      v-for="(val, key) in opLists"
      ghostClass="small-dom"
      :title="val.name"
      :name="val.name"
    >
      <DraggableA
        :list="val.value"
        :group="{ name: 'g1', pull: 'clone', put: false }"
        fallbackClass="test"
        item-key="name"
        :clone="cloneDog"
      >
        <!-- @start="dragStart"
        @end="dragEnd"
        :move="dragMove" -->
        <template #item="{ element }">
          <div class="lists-dom">
            <p>{{ element.name }}</p>
          </div>
        </template>
      </DraggableA>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import DraggableA from 'vuedraggable'
import {
  getDomOptions,
  getChartOptions,
  getTextOptions,
} from './js/getDefalutConfig.js'
import { opLists, zhanwei } from './utils/domComLists.js'
export default defineComponent({
  name: '',
  setup: () => {
    let nameIndex = ref(5)
    let activeNames = ref([])
    let cloneDog = function (element) {
      let getConfigMethodHandler: {
        chart: Function
        wrap: Function
        text: Function
      } = {
        chart: getChartOptions,
        wrap: getDomOptions,
        text: getTextOptions,
      }
      return {
        id: nameIndex.value++,
        name: 'chart' + nameIndex.value++,
        ...getConfigMethodHandler[element.type](element),
      }
    }
    return {
      cloneDog,
      opLists,
      activeNames,
    }
  },
  components: {
    DraggableA,
  },
})
</script>

<style scoped>
.lists-dom {
  display: inline-block;
  width: calc(100% - 20px);
  height: 62px;
  padding: 0 0 5px 0;
  margin: 10px 0 0 10px;
  border: 1px solid #323944;
  background: #191c21;
  float: left;
  text-align: center;
  cursor: move;
  position: relative;
  color: #fff;
}
</style>