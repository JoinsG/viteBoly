<template>
  <div v-for="(child, childIndex) in data">
    <el-collapse-item :title="child.name" name="2" v-if="child.children">
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
          @changHandlerOption="
            (v) => {
              changHandlerOption({
                v,
                childKey: child.key,
                type,
                child: child,
                childIndex,
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
              :pkey="getValueKey([child.key])"
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
      setValHandler({ v, key: resultKey, type, item: ctx.attrs.current })
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
        arr.push(`${child.key}`)
      } else {
        arr.push(`${child.key ?? ''}`)
      }
      let path = ''
      //        arr.unshift(props.pkey)
      let filterArr = arr.filter(Boolean)
      path = filterArr.join('.')
      //   let path = ''
      //   filterArr.forEach((val) => {
      //     console.log(val, !!val)
      //     if (/^[\d+]$/.test(val)) {
      //       path += val
      //     } else {
      //       path += path ? `.${val}` : `${val}`
      //     }
      //     console.log(path)
      //   })
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