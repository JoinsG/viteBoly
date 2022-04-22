<template>
  <el-input
    v-model="valItem.value"
    :disabled="true"
    size="small"
    v-if="valItem.type === 'color'"
  >
    <template v-slot:append="append">
      <el-color-picker
        v-model="valItem.value"
        size="small"
        show-alpha
        @change="
          (v) =>
            onKeyBlur({
              v,
              key: valItem.key,
              type,
              parentKey: val.key,
            })
        "
      ></el-color-picker>
    </template>
  </el-input>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  setup: () => {
    return {}
  },
  components: {},
})
</script>

<style></style>