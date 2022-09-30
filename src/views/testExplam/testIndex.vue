<template>
  <div class="main">
   <el-button @click="changeLists">测试</el-button>
  </div>
</template>

<script lang='ts'>
import DomeEchartWrap from '@/views/VueDraggable/DomeEchartWrap.vue'

import { defineComponent, getCurrentInstance, nextTick,watch } from 'vue'
export default defineComponent({
  name: 'itemNest',
  props: {
    list: {
      default: () => [],
      type: Array,
    },
    testList:{}
  },
  setup: (props, ctx) => {
    const CTX = getCurrentInstance()

    let changeLists = ()=>{
        props.testList.list = Object.freeze([
            {
                count:2
            }
        ])
    }
    return { changeLists }
  },
  components: { DomeEchartWrap },
})
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>