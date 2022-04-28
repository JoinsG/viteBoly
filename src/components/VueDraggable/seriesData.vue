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
        <p>22</p>
        <ColItem :data="defaultLine"></ColItem>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import ColItem from '@/components/VueDraggable/colItem.vue'
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
    let defaultLine = [
      {
        name: '对应X轴',
        key: 'xAxisIndex',
        value: 0,
        type: 'input',
      },
      {
        name: '对应Y轴',
        key: 'xAxisIndex',
        value: 0,
        type: 'input',
      },
      {
        name: '堆叠组名',
        key: 'stack',
        value: '',
        type: 'input',
      },
      {
        name: '是否梯线',
        key: 'step',
        value: false,
        type: 'switch',
      },
      {
        name: '标签',
        key: 'label',
        children: [
          {
            key: 'show',
            name: '是否显示',
            value: true,
            type: 'switch',
          },
          {
            key: 'color',
            name: '颜色',
            value: '#000',
            type: 'color',
          },
          {
            key: 'fontSize',
            name: '字体大小',
            value: 12,
            type: 'input',
          },
        ],
        type: 'next',
      },
      {
        name: '线条样式',
        key: 'lineStyle',
        children: [
          {
            key: 'width',
            name: '宽度',
            value: 2,
            type: 'input',
          },
          {
            key: 'color',
            name: '颜色',
            value: '#000',
            type: 'color',
          },
        ],
        type: 'next',
      },
    ]
    return {
      activeNames,
      handleChange,
      options,
      defaultLine,
    }
  },
  components: {ColItem},
})
</script>

<style></style>