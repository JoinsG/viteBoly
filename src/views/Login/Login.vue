<template>
  <el-form
    ref="ruleForm"
    :model="form"
    :rules="ruleForm"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="name">
      <el-input v-model="form.password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >Create</el-button
      >
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts'>
import { defineComponent, reactive, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'login',
  setup: () => {
    const Store = useStore()
    let { proxy } = getCurrentInstance()
    // let { proxy } = getCurrentInstance() as any
    console.log(proxy);
    console.log(proxy);
    let form = reactive({
      name: 'login',
      password: '11',
    })
    let ruleForm = reactive({})
    function submitForm(val: string) {
      proxy.$http({
                url: 'violet-api/login',
                method: 'post',
                data:form
            })
      Store.dispatch('user/login', form)
    }
    function resetForm(val: string) {}
    return {
      form,
      ruleForm,
      submitForm,
      resetForm,
    }
  },
  components: {},
})
</script>

<style scoped>
</style>