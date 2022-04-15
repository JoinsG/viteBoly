<template>
  <div>
    <div class="item" v-for="(val, key) in copyItem" >
      <div>
        <template v-if="checkeValType({ val, key })">
          <div>
            <span>{{ key }}</span
            ><span>{{ val }}</span>
            <!-- <span>{{ parentKey }}</span> -->
            <el-color-picker
              v-model="copyItem[key]"
              v-if="key === 'color'"
              @change="(v) => onKeyBlur({v, key,type})"
            ></el-color-picker>
            <el-input
              v-else
              v-model="copyItem[key]"
              @blur="(v) => onKeyBlur({v, key,type})"
            ></el-input>
            <!-- <el-input
              :modelValue="copyItem[key]"
              @blur="(v) => onKeyBlur(v, key)"
            ></el-input> -->
          </div>
        </template>
        <template v-else>
          <opItem :copyItem="val" :type="type" :pkey="getValueKey(pkey,key)"></opItem>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, inject } from 'vue'
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
    console.log(props.pkey)
    console.log(props.copyItem)
    let setValHandler = inject('setOpKeyVal')
    let checkeValType = function ({ val, key }) {
      let typeLists = ['[object Object]', '[object Array]']
      let f = typeLists.includes(Object.prototype.toString.call(val))
      return !f
    }
    let onKeyBlur = function ({v, key,type}) {
      console.log(props.pkey)
      console.log(key)
      setValHandler({v:props.pkey, key,type})
    }
    let getValueKey = function(pkey,key){
        if(pkey){return `${pkey}[${key}]`}
        return key
    }
    return {
      checkeValType,
      onKeyBlur,
      getValueKey
    }
  },
  components: {},
})
</script>

<style>
</style>