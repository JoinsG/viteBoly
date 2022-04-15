<template>
  <el-input v-model="value"></el-input>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'option2',
  setup: () => {
    let value = ref(0)
    const STORE = useStore()
    STORE.dispatch('user/testUser')
    return { value }
  },
  components: {},
})
</script>

<style></style>