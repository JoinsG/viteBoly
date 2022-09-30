<template>
  <input name="field" v-model="name" />
  <span>{{ errorMessage }}</span>
  <Form>
    <Field name="field1" :rules="isRequiredA"> </Field>
    <ErrorMessage name="field1" />
  </Form>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useField, Field, Form, ErrorMessage } from 'vee-validate'
export default defineComponent({
  name: 'validate',
  setup: () => {
    // Validator function
    const isRequired = (value) => {
      if (!value) {
        return 'this field is required'
      }

      if (value.length < 8) {
        return 'this field must contain at least 8 characters'
      }

      return true
    }
    const { value: name, errorMessage } = useField('field', isRequired)
    console.log(name)

    function isRequiredA(value:any) {
      // if (value && value.trim()) {
      //   return true
      // }
      if(isNaN(+value)){
        return '必须是数字'
      }
      if(value.trim() === '') {
        return 'This is required111111111'
      }
      return true
    }
    let field1 = ref(0)
    return {
      field1,
      isRequiredA,
      name,
      errorMessage,
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
})
</script>

<style>
</style>