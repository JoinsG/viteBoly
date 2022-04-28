<template>
  <el-collapse v-model="activeNames" @change="handleChange" class="wrap-option">
    <template v-for="(parent, parentIndex) in copyItem">
      
    </template>
    <el-collapse-item
      class="item"
      v-for="(parent, parentIndex) in copyItem"
      :title="parent.name"
      :name="parent.name"
    >
      <div class="col-item" v-for="(child, childIndex) in parent.children" >
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
         <template #default v-if="['padding', 'margin', 'radius'].includes(child.key)">
           <SquareVue
              :dataLists="child.value"
              :styleType="child.key"
              :pkey="getValueKey([pkey, parent.key, child.key])"
              :type="type"
            ></SquareVue>
         </template>
        </testOp>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, inject, watch } from 'vue'
import SquareVue from '../../components/VueDraggable/Square.vue'
import YXsuare from '../../components/VueDraggable/YXsuare.vue'
import testOp from '@/components/VueDraggable/testOp.vue'

export default defineComponent({
  name: 'opItem',
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
    let onKeyBlur = function ({ v, childKey, type, child, parentIndex }) {
      let resultKey = getValueKey([props.pkey, parentIndex, childKey])
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
    let checkTypeKey = function (item, childIndex) {
      if (item.type === 'yAxis') {
        return `${item.key}[${childIndex}]`
      }
      return item.key
    }
    let changHandlerOption = function ({
      v,
      childKey,
      type,
      child,
      parentIndex,
    }) {
      console.log(111)
      onKeyBlur({ v, childKey, type, child, parentIndex })
    }
    let activeNames = ref()
    let handleChange = function (val, key) {}
    return {
      onKeyBlur,
      getValueKey,
      activeNames,
      handleChange,
      checkTypeKey,
      changHandlerOption,
    }
  },
  components: {
    SquareVue,
    YXsuare,
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