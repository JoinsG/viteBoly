<template>
  <el-drawer v-model="treeDrawer" direction="ltr" :with-header="false">
    <el-tree
      ref="treeRef"
      :data="data"
      :props="defaultProps"
      :expand-on-click-node="false"
      @node-click="handleNodeClick"
      :filter-node-method="filterNodeMethod"
      draggable
    ></el-tree>
  </el-drawer>
</template>

<script lang='ts'>
import { defineComponent, ref, defineExpose, onMounted, nextTick } from 'vue'
import { useUserStore } from '../../../store-pinia/draggable'
import { ElTree } from 'element-plus'
export default defineComponent({
  name: 'draggle-tree',
  props: {},
  setup: (props, ctx) => {
    interface Tree {
      name: string
      tasks?: Tree[]
      disabled?: Function | string
    }
    const useUserStoreConst = useUserStore()
    console.log(useUserStoreConst.name)
    let treeRef = ref<InstanceType<typeof ElTree>>(null)
    const handleNodeClick = (data: Tree) => {
      console.log(data)
      console.log(data === useUserStoreConst.getChooseChartItem)
      if (['zw', 'component'].includes(data.type)) {
        return
      }
      useUserStoreConst.setChooseChart(data)
    }

    const data: Tree[] = useUserStoreConst.getTotalTreeLists

    const defaultProps = {
      children: 'tasks',
      label: 'name',
      disabled: 'disabledtree',
    }

    ////////过滤掉占位
    let filterNodeMethod = function (value, data, node) {
      return !['zw'].includes(data.type) 
    }
    let treeDrawer = ref(false)
    // ctx.emit('update', treeDrawer)
    let openTreeDrawer = function () {
      treeDrawer.value = true
      nextTick(() => {
        console.log(treeRef)
        treeRef.value!.filter()
      })
    }

    ///暴露打开方式
    defineExpose({
      openTreeDrawer,
    })

    onMounted(() => {
      //   treeRef.value!.filter()
      console.log(treeRef)
    })
    return {
      treeRef,
      handleNodeClick,
      defaultProps,
      data,
      treeDrawer,
      openTreeDrawer,
      filterNodeMethod,
    }
  },
  components: {},
})
</script>

<style scoped>
</style>