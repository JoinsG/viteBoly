<template>
  <el-collapse v-model="activeNames" @change="handleChange" class="wrap-option">
    <el-collapse-item
      class="item"
      v-for="(parent, parentIndex) in copyItem"
      :title="parent.name"
      :name="parent.name"
    >
      <div class="col-item" v-for="(child, childIndex) in parent.value">
        <label>{{ child.name }}</label>
        <div class="col-item-right">
          <!-- <el-input
            v-model="valItem.value"
            :disabled="true"
            size="small"
            v-if="valItem.type === 'color'"
          >
            <template v-slot:append="append">
              <el-color-picker
                v-model="valItem.value"
                size="small"
                show-alpha
                @change="
                  (v) =>
                    onKeyBlur({
                      v,
                      key: valItem.key,
                      type,
                      parentKey: `[${index}]`,
                    })"
              ></el-color-picker>
            </template>
          </el-input>
          <SquareVue
            v-else-if="['padding', 'margin', 'radius'].includes(valItem.key)"
            :dataLists="valItem.value"
            :styleType="valItem.key"
            :pkey="getValueKey([pkey, valItem.key])"
            :type="type"
          ></SquareVue>
          <el-select
            v-model="valItem.value"
            placeholder="请选择"
            size="small"
            v-else-if="valItem.type === 'select'"
            @change="
              (v) =>
                onKeyBlur({
                  v,
                  key: valItem.key,
                  type,
                  parentKey: `[${index}]`,
                })"
          >
            <el-option
              v-for="item in valItem.select"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-switch
            v-model="valItem.value"
            v-else-if="valItem.type === 'switch'"
            @change="
              (v) =>
                onKeyBlur({
                  v,
                  key: valItem.key,
                  type,
                  parentKey: `[${index}]`,
                })"
          ></el-switch>
          <el-input
            size="small"
            v-else
            v-model="valItem.value"
            @change="
              (v) =>
                onKeyBlur({
                  v,
                  key: valItem.key,
                  type,
                  item: valItem,
                  parentKey: `[${index}]`,
                })"
          ></el-input> -->
          <testOp
            :item="child"
            @changHandlerOption="
              (v) => {
                changHandlerOption({
                  v,
                  childKey: child.key,
                  type,
                  child: child,
                  parentIndex: `[${parentIndex}]`})
              }"
          ></testOp>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts'>
import { defineComponent, ref, inject, watch } from 'vue'
import testOp from '@/components/VueDraggable/testOp.vue'
export default defineComponent({
  name: '',
  props: {
    type: {
      type: String,
      default: 'style',
    },
    copyItem: {
      type: Object,
    },
    pkey: {
      type: String,
      default: '',
    },
  },
  setup: (props, ctx) => {
    let setValHandler = inject('setOpKeyVal')
    let activeNames = ref()
    let handleChange = function (val, key) {}
    let onKeyBlur = function ({ v, childKey, type, child, parentIndex }) {
      let resultKey = getValueKey([props.pkey, parentIndex, childKey])
      setValHandler({ v, key: resultKey, type, item: ctx.attrs.current })
    }
    let getValueKey = function (arr = []) {
      let filterArr = arr.filter(Boolean)
      let path = ''
      filterArr.forEach((val) => {
        console.log(/[\d+]/.test(val))
        console.log(val)
        if (/[\d+]/.test(val)) {
          path += val
        } else {
          path += path ? `.${val}` : `${val}`
        }
        console.log(path)
      })
      return path
    }
    let changHandlerOption = function ({ v, childKey, type, child, parentIndex }) {
      console.log(111);
      onKeyBlur({ v, childKey, type, child, parentIndex })
    }
    return {
      onKeyBlur,
      getValueKey,
      activeNames,
      handleChange,
      changHandlerOption
    }
  },
  components: {
    testOp,
  },
})
</script>

<style scoped>
.col-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
.col-item label {
  font-size: 12px;
  white-space: nowrap;
  padding: 0 6px;
}
</style>