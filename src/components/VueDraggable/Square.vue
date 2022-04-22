<template>
  <div class="Square" :class="[styleType]">
    <div class="top-left item">
      <el-input
        v-model="dataLists[0]"
        size="small"
        @change="(v) => onKeyBlur({ v, index: 0 })"
      ></el-input>
    </div>
    <div class="top-right item">
      <el-input
        v-model="dataLists[1]"
        size="small"
        @change="(v) => onKeyBlur({ v, index: 1 })"
      ></el-input>
    </div>
    <div class="content"></div>
    <div class="bot-left item">
      <el-input
        v-model="dataLists[2]"
        size="small"
        @change="(v) => onKeyBlur({ v, index: 2 })"
      ></el-input>
    </div>
    <div class="bot-right item">
      <el-input
        v-model="dataLists[3]"
        size="small"
        @change="(v) => onKeyBlur({ v, index: 3 })"
      ></el-input>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'Square',
  props: {
    dataLists: {
      default: () => [0, 0, 0, 0],
      type: Array,
    },
    styleType: {},
    pkey: {
      type: String,
      default: '',
    },
  },
  setup: (props, ctx) => {
    let setValHandler = inject('setOpKeyVal')
    let getValDirection = function(type,key,index) {
    }
    let onKeyBlur = function ({ v, key, item,index }) {
      console.log(props.pkey)
      console.log(key)
      console.log(v)
      setValHandler({ v:props.dataLists, key: props.pkey, type: 'style' })
    }
    return { onKeyBlur }
  },
  components: {},
})
</script>

<style scoped>
.Square {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100px;
  
}
.Square .item {
  width: 30px;
  justify-self: center;
  align-self: center;
}
.radius .content {
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: #999;
}
.radius .top-left {
  grid-column: 1/2;
  grid-row: 1/2;
}
.radius .top-right {
  grid-column: 3/4;
  grid-row: 1/2;
}
.radius .bot-left {
  grid-column: 1/2;
  grid-row: 3/4;
}
.radius .bot-right {
  grid-column: 3/4;
  grid-row: 3/4;
}
.margin .content {
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: #999;
}
.margin .top-left {
  grid-column: 2/3;
  grid-row: 1/2;
}
.margin .top-right {
  grid-column: 3/4;
  grid-row: 2/3;
}
.margin .bot-left {
  grid-column: 2/3;
  grid-row: 3/4;
}
.margin .bot-right {
  grid-column: 1/2;
  grid-row: 2/3;
}
.padding .content {
  grid-column: 1 / end;
  grid-row: 1 / end;
  background-color: #999;
}
.padding .top-left {
  grid-column: 2/3;
  grid-row: 1/2;
}
.padding .top-right {
  grid-column: 3/4;
  grid-row: 2/3;
}
.padding .bot-left {
  grid-column: 2/3;
  grid-row: 3/4;
}
.padding .bot-right {
  grid-column: 1/2;
  grid-row: 2/3;
}
</style>