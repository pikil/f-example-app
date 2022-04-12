<template>
  <q-select
    v-model="value"
    :options="JobStatuses"
    dense
    outlined
    :dropdown-icon="fasAngleDown"
    label="Status"
  />
</template>
<script>
import { defineComponent, computed } from 'vue'
import JobStatuses from 'src/data/JobStatuses'
import { fasAngleDown } from '@quasar/extras/fontawesome-v6'

export default defineComponent({
  props: {
    modelValue: {
      type: [Number, String],
      required: true
    }
  },
  setup (props, { emit }) {
    return {
      JobStatuses,
      fasAngleDown,
      value: computed({
        get: () => {
          const statusData = JobStatuses.find(({ value }) => value === props.modelValue)
          return statusData || null
        },
        set: ({ value }) => {
          emit('update:modelValue', value)
        }
      })
    }
  }
})
</script>
