<template>
  <div v-for="(child, childIndex) in data">
    <el-collapse-item title="Consistency" name="2" v-if="child.children">
      <ColItem :data="child.children"></ColItem>
    </el-collapse-item>
    <template v-else>
      <div class="col-item">
        <label>{{ child.name }}</label>
        <testOp
          :item="child"
          @changHandlerOption="
            (v) => {
              changHandlerOption({
                v,
                childKey: child.key,
                type,
                child: child,
                parentIndex: checkTypeKey(parent, childIndex),
              })
            }"
        >
          <template
            #default
            v-if="['padding', 'margin', 'radius'].includes(child.key)"
          >
            <SquareVue
              :dataLists="child.value"
              :styleType="child.key"
              :pkey="getValueKey([pkey, parent.key, child.key])"
              :type="type"
            ></SquareVue>
          </template>
        </testOp>
      </div>
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ColItem',
  props: {
    data: {
      default: () => [],
      type: Array,
    },
    type: {
      default: 'chart',
    },
    pkey: {
      default: '',
      type: String,
    },
  },
  setup: () => {
    return {}
  },
  components: {},
})
</script>

<style scoped>
.col-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
</style>