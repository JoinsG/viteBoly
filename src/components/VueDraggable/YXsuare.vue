<template>
  <el-collapse v-model="activeNames" @change="handleChange" class="wrap-option">
    <el-collapse-item
      class="item"
      v-for="(val, index) in copyItem"
      :title="val.name"
      :name="val.name"
    >
      <div class="col-item" v-for="(valItem, keyItem) in val.value">
        <label>{{ valItem.name }}</label>
        <div class="col-item-right">
          <el-input
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
                    })
                "
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
                })
            "
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
                })
            "
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
                })
            "
          ></el-input>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts'>
import { defineComponent, ref, inject, watch } from 'vue'
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
    let onKeyBlur = function ({ v, key, type, item, parentKey }) {
      let resultKey = getValueKey([props.pkey, parentKey, key])
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
    return {
      onKeyBlur,
      getValueKey,
      activeNames,
      handleChange,
    }
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
.col-item label {
  font-size: 12px;
  white-space: nowrap;
  padding: 0 6px;
}
</style>