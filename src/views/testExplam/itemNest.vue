<template>
  <div class="main">
    <div
      v-for="element in list"
      :style="{ ...element.style }"
      :class="[
        ...(element?.class ?? []),
      ]"
    >
      <div v-if="element.type === 'text'">{{ element.data.text }}</div>
      <itemNest
        :drageIndex="drageIndex + index"
        v-if="element.type === 'wrap'"
        :list="element.tasks"
        :element="element"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'itemNest',
  props: {
    list: {
      default: () => [],
      type: Array,
    },
  },
  setup: () => {
    return {}
  },
  components: {},
})
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>