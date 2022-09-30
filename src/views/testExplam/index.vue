<template>
  <div
    style="
      width: 1920px;
      height: 1080px;
      transform: scale(1);
      transform-origin: left top;
    "
  >
    <itemNestVue :list="list" :testList="testList"></itemNestVue>
    <testIndex :list="list" :testList="testList"></testIndex>
    <el-button type="danger" @click="goout">退出</el-button>
    <div
      class="parent box"
      @mouseover.stop="hoverEnter"
      @mouseout.stop="hoverLeave"
    >
      <div
        class="item-1 box"
        @mouseover.stop="hoverEnter"
        @mouseout.stop="hoverLeave"
      >
        <div
          class="item-1-1 box"
          @mouseover.stop="hoverEnter"
          @mouseout.stop="hoverLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import itemNestVue from './itemNest.vue'
import testIndex from './testIndex.vue'
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  name: 'test',
  setup: () => {
    const router = useRouter()
    const route = useRoute()
    let list = ref()
    let testList = ref({
      a: 0,
      // list:[
      //   {
      //     count: 1,
      //   },
      // ],
      list: Object.freeze([
        {
          count: 1,
        },
      ]),
    })
    setTimeout(() => {
      testList.value.list[0].count = 2
    },2000)
    function hoverEnter(ele) {
      console.log(ele)
      console.log(ele.target.parent)
    }
    function hoverLeave(ele) {
      console.log(ele.target)
    }
    function goout(ele) {
      window.localStorage.removeItem('token')
      router.push('/login')
    }
    return {
      testList,
      list,
      hoverEnter,
      hoverLeave,
      goout,
    }
  },
  components: {
    itemNestVue,
    testIndex
  },
})
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid deeppink;
  box-sizing: border-box;
  padding: 10px;
}
.parent {
  width: 400px;
  height: 400px;
}
.item-1 {
  width: 200px;
  height: 200px;
}
</style>