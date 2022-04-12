<template>
  <form-input :rules="emailRules" lazy-rules />
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
      emailRules: [
        val => (typeof val === 'string' && val.length >= minLen) || 'Email must be at least ' + minLen + ' characters', // Simple check for now
        val => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(val) || 'Email must be valid'
      ]
    }
  }
})
</script>
