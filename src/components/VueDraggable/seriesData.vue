<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Consistency" name="1">
        <template #title>
          <el-select
            size="small"
            v-model="value"
            class="m-2"
            placeholder="Select"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
        
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: '',
  setup: () => {
    const activeNames = ref(['1'])
    const handleChange = (val: string[]) => {
      console.log(val)
    }
    const options = [
      {
        value: 'line',
        label: '折线',
      },
      {
        value: 'bar',
        label: '柱状',
      },
    ]
    return {
      activeNames,
      handleChange,
      options,
    }
  },
  components: {},
})
</script>

<style></style>