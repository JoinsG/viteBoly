<template>
  <div v-for="(child, childIndex) in data">
    <template v-if="child.isFn">
      <div class="col-item">
        <label>{{ child.name }}</label>
        <testOp
          :item="child"
          :type="type"
          @changHandlerOption="
            (v) => {
              changHandlerOption({
                v,
                childKey: child.key,
                type,
                child: child,
                childIndex,
              })
            }
          "
        >
          <template
            #default
            v-if="['padding', 'margin', 'radius'].includes(child.key)"
          >
            <SquareVue
              :dataLists="child.value"
              :styleType="child.key"
              :pkey="getValueKey(child)"
              :type="type"
            ></SquareVue>
          </template>
        </testOp>
      </div>
      <el-collapse-item
        :title="child.name"
        :name="child.key"
        v-show="child.value"
      >
        <ColItem
          :data="child.children"
          :pkey="getValueKey(child, childIndex)"
          :type="type"
          v-bind="{ ...$attrs }"
        ></ColItem>
      </el-collapse-item>
    </template>
    <el-collapse-item
      :title="child.name"
      :name="child.key"
      v-else-if="child.children"
    >
      <ColItem
        :data="child.children"
        :pkey="getValueKey(child, childIndex)"
        :type="type"
        v-bind="{ ...$attrs }"
      ></ColItem>
    </el-collapse-item>
    <template v-else>
      <div class="col-item">
        <label>{{ child.name }}</label>
        <testOp
          :item="child"
          :type="type"
          @changHandlerOption="
            (v) => {
              changHandlerOption({
                v,
                childKey: child.key,
                type,
                child: child,
                childIndex,
              })
            }
          "
        >
          <template
            #default
            v-if="['padding', 'margin', 'radius'].includes(child.key)"
          >
            <SquareVue
              :dataLists="child.value"
              :styleType="child.key"
              :pkey="getValueKey(child)"
              :type="type"
            ></SquareVue>
          </template>
        </testOp>
      </div>
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
import SquareVue from '../../components/VueDraggable/Square.vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'ColItem',
  props: {
    data: {
      default: () => [],
      type: Array,
    },
    type: {
      default: 'style',
    },
    pkey: {
      default: '',
      type: String,
    },
  },
  setup: (props, ctx) => {
    let setValHandler = inject('setOpKeyVal')

    let onKeyBlur = function ({ v, childKey, type, child, childIndex }) {
      let resultKey = getValueKey(child, childIndex)
      console.log(resultKey)
      let value = v
      if (child?.icon?.e) {
        value += child?.icon?.e ?? ''
      }
      value = isNaN(+value) ? value : +value
      setValHandler({
        v: value,
        key: resultKey,
        type,
        item: ctx.attrs.current,
        child,
        options: child.options,
      })
    }
    let changHandlerOption = function ({
      v,
      childKey,
      type,
      child,
      childIndex,
    }) {
      console.log({
        v,
        childKey,
        type,
        child,
        childIndex,
      })
      onKeyBlur({ v, childKey, type, child, childIndex })
    }
    let checkTypeKey = function (item, childIndex) {
      if (item.s === 'yAxis') {
        return `[${childIndex}]`
      }
      return ''
    }
    let getValueKey = function (child, childIndex) {
      let arr = [props.pkey]
      if (child.s === 'yAxis') {
        arr[0] = `${props.pkey}[${childIndex}]`
      }
      if (/\[[0-9]+\]/.test(child.key)) {
        let strPop = arr.pop()
        arr.push(strPop + child.key)
      } else {
        arr.push(`${child.key ?? ''}`)
      }
      let path = ''
      let filterArr = arr.filter(Boolean)
      path = filterArr.join('.')
      return path
    }
    return {
      changHandlerOption,
      checkTypeKey,
      getValueKey,
    }
  },
  components: {
    SquareVue,
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
</style>