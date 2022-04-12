<template>
  <form-input :rules="nameRules" lazy-rules :label="label" />
</template>
<script>
import { defineComponent } from 'vue'
import FormInput from './FormInput'

const minLen = 2
const maxLen = 50

export default defineComponent({
  components: {
    FormInput
  },
  props: {
    label: String
  },
  setup (props) {
    return {
      nameRules: [
        val => (typeof val === 'string' && val.length >= minLen) || props.label + ' must be at least ' + minLen + ' characters',
        val => val.length <= maxLen || props.label + ' must be less than ' + maxLen + ' characters'
      ]
    }
  }
})
</script>
