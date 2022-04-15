<template>
  <el-input v-model="value"></el-input>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'option1',
  setup: () => {
    let value = ref(0)
    return { value }
  },
  components: {},
})
</script>

<style></style>