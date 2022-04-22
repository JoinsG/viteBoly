<template>
  <el-collapse v-model="activeNames" @change="handleChange" class="wrap-option">
    <el-collapse-item
      class="item"
      v-for="(val, index) in copyItem"
      :title="val.name"
      :name="val.name"
    >
      <YXsuare
        v-if="val.type === 'yAxis'"
        :copyItem="val.value"
        :pkey="val.key"
        :type="type"
        v-bind="{ ...$attrs }"
      ></YXsuare>
      <div class="col-item" v-for="(valItem, keyItem) in val.value" v-else>
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
                        parentKey: val.key,
                      })
                  "
                ></el-color-picker>
              </template>
            </el-input>
            <SquareVue
              v-else-if="['padding', 'margin', 'radius'].includes(valItem.key)"
              :dataLists="valItem.value"
              :styleType="valItem.key"
              :pkey="getValueKey([pkey, val.key, valItem.key])"
              :type="type"
            ></SquareVue>
            <el-select
              v-model="valItem.value"
              placeholder="请选择"
              size="small"
              v-else-if="valItem.type === 'select'"
              @change="
                (v) =>
                  onKeyBlur({ v, key: valItem.key, type, parentKey: val.key })
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
                  onKeyBlur({ v, key: valItem.key, type, parentKey: val.key })
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
                    parentKey: val.key,
                  })
              "
            ></el-input>
            <!-- <el-input
              :modelValue="copyItem[key]"
              @blur="(v) => onKeyBlur(v, key)"
            ></el-input> -->
          </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, inject, watch } from 'vue'
import SquareVue from '../../components/VueDraggable/Square.vue'
import YXsuare from '../../components/VueDraggable/YXsuare.vue'
export default defineComponent({
  name: 'opItem',
  props: {
    type: {
      type: String,
      default: 'style',
    },
    copyItem: {
      type: Object
    },
    pkey: {
      type: String,
      default: '',
    },
  },
  setup: (props, ctx) => {
    let setValHandler = inject('setOpKeyVal')
    let onKeyBlur = function ({ v, key, type, item, parentKey }) {
      let resultKey = getValueKey([props.pkey, parentKey, key])
      setValHandler({ v, key: resultKey, type, item: ctx.attrs.current })
    }
    let getValueKey = function (arr = []) {
      let filterArr = arr.filter(Boolean)
      let path = ''
      filterArr.forEach((val) => {
        console.log(val, !!val)
        if (/^[\d+]$/.test(val)) {
          path += val
        } else {
          path += path ? `.${val}` : `${val}`
        }
        console.log(path)
      })
      return path
    }
    let checkOptionKey= function({parent,parentKey,child,childKey}) {
      
    }
    let activeNames = ref()
    let handleChange = function (val, key) {}
    return {
      onKeyBlur,
      getValueKey,
      activeNames,
      handleChange,
    }
  },
  components: {
    SquareVue,
    YXsuare,
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
.wrap-option {
  background-color: #999;
}
.col-item-right {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
:deep(.el-collapse-item__header) {
  background-color: #2e343c;
  color: #bcc9d4;
}
:deep(.el-collapse-item__content) {
  background-color: rgba(46, 52, 60, 0.944);
  color: #bcc9d4;
}
:deep(input) {
  background-color: #0f1014;
}
:deep(.col-item + .col-item) {
  border-top: 1px solid #999;
}
:deep(.el-input.is-disabled .el-input__inner) {
  background-color: #0f1014;
}
:deep(.el-input-group__append) {
  padding: 0;
  background: #262c33;
  color: #bcc9d4;
  padding: 0 5px;
}
</style>