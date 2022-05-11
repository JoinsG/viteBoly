<template>
  <div class="col-item-right">
    <el-input
      v-model="item.value"
      :disabled="true"
      size="small"
      v-if="item.type === 'color'"
    >
      <template v-slot:append="append">
        <el-color-picker
          v-model="item.value"
          size="small"
          show-alpha
          @change="changHandler"
        ></el-color-picker>
      </template>
    </el-input>
    <el-select
      v-model="item.value"
      placeholder="请选择"
      size="small"
      v-else-if="item.type === 'select'"
      @change="changHandler"
    >
      <el-option
        v-for="i in item.select"
        :key="i.value"
        :label="i.name"
        :value="i.value"
      >
      </el-option>
    </el-select>
    <el-switch
      v-model="item.value"
      v-else-if="item.type === 'switch'"
      @change="changHandler"
    ></el-switch>
    <el-input
      size="small"
      v-else-if="item.type === 'input'"
      v-model="item.value"
      @change="changHandler"
    ></el-input>
    <el-slider
      v-else-if="item.type === 'silder'"
      v-model="item.value"
      size="small"
      @change="changHandler"
      v-bind="{...item.bind}"
    />
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import SquareVue from '@/components/VueDraggable/Square.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  props: {
    item: {
      default: () => {},
    },
  },
  setup: (props, ctx) => {
    let changHandler = function (v) {
      ctx.emit('changHandlerOption', v)
    }
    let getI = function (v) {
      console.log(v)
    }
    return { changHandler, getI }
  },
  components: { SquareVue },
})
</script>

<style></style>