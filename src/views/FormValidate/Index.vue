<template>
  <div id="veevali">
    <input name="field" v-model="name" />
    <span>{{ errorMessage }}</span>
    <Form>
      <Field name="field1" :rules="isRequiredA"> </Field>
      <ErrorMessage name="field1" />
    </Form>

    <el-input name="email" v-model="email"></el-input>
    <span>{{ errors.email }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref,watch } from 'vue'
import {
  useField,
  Field,
  Form,
  ErrorMessage,
  useFieldModel,
  useForm,
} from 'vee-validate'
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

    function isRequiredA(value: any) {
      // if (value && value.trim()) {
      //   return true
      // }
      if (isNaN(+value)) {
        return '必须是数字'
      }
      if (value.trim() === '') {
        return 'This is required111111111'
      }
      return true
    }
    let field1 = ref(0)
    ///////////////
    // Create a form context with the validation schema
    // Define a validation schema
    const simpleSchema = {
      email(value) {
        // validate email value and return messages...
        if(!value){return '这是必须先的'}
        return true
      },
      name(value) {
        // validate name value and return messages...
      },
    }
    const { errors, useFieldModel } = useForm({
      validationSchema: simpleSchema,
    })
    setTimeout(() => {
      console.log(2)
      delete simpleSchema.email
    },5000)
    let email = useFieldModel('email')



    let  testDeleteObjec = ref({
      a:1,
      b:2
    })
    watch(testDeleteObjec,()=>{
      console.log(testDeleteObjec)
    },{deep:true})
    setTimeout(() => {
      testDeleteObjec.value.c =1
    },2000)
    setTimeout(() => {
      testDeleteObjec.value.c =2
      console.log(testDeleteObjec)
    },5000)
    return {
      errors,
      email,
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

<style scoped>
#veevali {
  font-size: 0.2rem;
}
</style>