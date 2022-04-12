<template>
  <form-input :rules="phoneRules" lazy-rules />
</template>
<script>
import { defineComponent } from 'vue'
import FormInput from './FormInput'

const minLen = 6

export default defineComponent({
  components: {
    FormInput
  },
  setup () {
    return {
      phoneRules: [
        val => (typeof val === 'string' && val.length >= minLen) || 'Phone number must be at least ' + minLen + ' characters', // Simple check for now
        val => /[\d+]+/.test(val) || 'Phone number must contain only digits and +'
      ]
    }
  }
})
</script>
