<template>
  <DraggableA
    class="dragArea"
    tag="div"
    :list="tasks"
    :group="{ name: 'g1' }"
    fallbackClass="test"
    item-key="name"
    ghostClass="small-dom"
    filter=".no-drag"
    scroll
    @start="dragStart"
    @end="dragEnd"
    @add="dragAdd"
    :move="(e) => dragMove(e, element)"
    ref="draggDom"
  >
    <template #item="{ element, index }">
      <div
        class="chart-dom"
        :class="[
          $attrs.chooseAcItem === element ? 'ac-item' : '',
          ...(element?.class??[]),
        ]"
        :style="{ ...element.style }"
        v-if="element.type === 'chart'"
        @click.stop="getClickItem(element)"
      >
        <DomeEchartWrap
          :ref="element.name"
          :id="getId(element)"
        ></DomeEchartWrap>
      </div>
      <div v-else-if="element.type === 'component'" class="component-wrap">
        <component :is="element.name" v-bind="{ ...element.data }"></component>
      </div>
      <div
        v-else
        :style="{ ...element.style }"
        :class="[
          $attrs.chooseAcItem === element ? 'ac-item' : '',
          ...(element?.class??[]),
        ]"
        @click.stop="getClickItem(element)"
      >
        <p v-if="element.type === 'zw'">{{ element.name }}{{element.class}}</p>
        <nested-draggable
          :drageIndex="drageIndex + index"
          v-if="element.type === 'wrap'"
          :tasks="element.tasks"
          :element="element"
          v-bind="{ ...$attrs }"
          ghostClass="small-dom"
        />
      </div>
    </template>
  </DraggableA>
</template>

<script lang="ts">
import car from '@/components/kanban/car.vue'
import {
  defineComponent,
  reactive,
  ref,
  getCurrentInstance,
  onMounted,
  nextTick,
  inject,
} from 'vue'
import DraggableA from 'vuedraggable'
import DomeEchartWrap from './DomeEchartWrap.vue'
import { dragStart, dragMove, dragEnd, dragClone } from './utils/dragMenthod'
export default defineComponent({
  name: 'nested-draggable',
  props: {
    drageIndex: {
      type: String,
      default: '0',
    },
    tasks: {
      required: true,
      type: Array,
    },
    position: {
      type: [Number, String],
      default: 0,
    },
    element: {
      default: () => {},
    },
  },
  setup: (props, ctx) => {
    let draggeDomWeak = inject('draggeDomWeak')
    let draggDom = ref(null)
    console.log(draggDom.value)
    const CTX = getCurrentInstance()
    let tasks = reactive(props.tasks)
    let getClickItem = function (element) {
      console.log(ctx)
      console.log(element === ctx.attrs.chooseAcItem)
      if (['zw', 'component'].includes(element.type)) {
        return
      }
      let { onGetItem } = ctx.attrs
      ctx.emit('getChooseItemOption', element)
    }
    let addHandler = function (element) {
      console.log(element)
    }
    let getId = function (element) {
      console.log(element)
      nextTick(() => {
        console.log(CTX)
        setTimeout(() => {
          CTX.refs[element.name].setEchartOption(element.chart)
          ctx.emit('setWeakChart', element, CTX.refs[element.name])
        }, 50)
      })
      return element.name
    }
    let dragAdd = function (element) {
      console.log(element)
      console.log(props.tasks)
      if (props.tasks.length > 1) {
        let index = props.tasks.findIndex((v) => v.name === '占位')
        console.log(index)
        if (index != -1) {
          props.tasks.splice(index, 1)
        }
      }
      //存放dom元素
      ctx.emit('setDraggeDom', props.tasks, element.to)
    }
    let dragEnd = function (element) {
      if (element.from === element.to) {
        return
      }
      console.log(draggeDomWeak.get(element.from))
      let tasks = draggeDomWeak.get(element.from) ?? [1]
      if (tasks.length === 0) {
        tasks.push({
          name: '占位',
          type: 'zw',
          class: ['no-drag'],
          style: {
            width: '100px',
            border: '1px solid red',
            padding: '10px 10px 10px 10px',
          },
        })
      }
    }

    return {
      tasks,
      getClickItem,
      addHandler,
      getId,
      dragStart,
      dragMove,
      dragEnd,
      dragClone,
      dragAdd,
      draggDom,
    }
  },
  components: {
    DraggableA,
    DomeEchartWrap,
    car,
  },
})
</script>
<style scoped>
.dragArea:empty {
}
.drag-wrap /deep/ .drag-wrap.wrap-class {
  outline: 1px dashed;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  outline: 1px dashed pink;
}
.drag-wrap /deep/ .drag-wrap.wrap-class .dragArea {
  min-width: 20px;
  min-height: 20px;
}
.dragArea > div {
  position: relative;
}

.add-wrap {
  /* position: relative;
    height:200px;
    width: 100%;
    z-index: 99;
    background-color: #999; */
  /* height:100px;
    width: 100%; */
  line-height: 150px;
}

.dm {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid red;
  top: 0;
}

.small-dom {
  width: 10px !important;
  height: 10px !important;
  border: 1px dashed blue;
  overflow: hidden;
}
:deep(*) {
  transition: all .3s;
}
</style>