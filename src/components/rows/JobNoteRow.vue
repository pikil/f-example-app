<template>
  <q-item dense>
    <q-item-section>
      <q-item-label caption><strong>{{noteTime}}</strong> - <em>{{note.text}}</em></q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent } from 'vue'
import JobNote from 'src/models/JobNote'
import { date } from 'quasar'
import { StandardDateFormat } from 'src/data/JobConstants'

const { formatDate } = date

export default defineComponent({
  props: {
    note: {
      type: JobNote,
      required: true
    }
  },
  setup (props) {
    return {
      noteTime: formatDate(new Date(props.note.time), StandardDateFormat)
    }
  }
})
</script>
