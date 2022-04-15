<template>
  <div>{{ test }}</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'cs',
  props: {
    test: {
      default: 0,
    },
  },
  setup: () => {
    return {}
  },
  components: {},
})
</script>

<style></style>