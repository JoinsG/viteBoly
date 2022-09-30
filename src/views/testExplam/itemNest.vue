<template>
  <div class="main">
    <div
      v-for="element in list"
      :style="{ ...element.style }"
      :class="[...(element?.class ?? [])]"
    >
      <div v-if="element.type === 'text'">{{ element.data.text }}</div>
      <DomeEchartWrap
        v-if="element.type === 'chart'"
        :ref="element.name"
        :id="getId(element)"
      ></DomeEchartWrap>
      <itemNest
        :drageIndex="drageIndex + index"
        v-if="element.type === 'wrap'"
        :list="element.tasks"
        :element="element"
      />
    </div>
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

    let getId = function (element) {
      console.log(element)
      console.log(element.name)
      nextTick(() => {
        console.log(CTX.refs[element.name][0])
        setTimeout(() => {
          CTX.refs[element.name][0].setEchartOption(element.chart)
        }, 50)
      })
      return element.name
    }
    watch(props.testList, (newV) => {
      console.log(newV)
    },{deep:true})
    return { getId }
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