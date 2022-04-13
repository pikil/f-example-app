<template>
  <q-item>
    <q-item-section side top style="padding-top: 2px">
      <q-item-label>Job #{{job.id}}</q-item-label>
      <q-item-label v-if="job.id === lastNewJobId">
        <q-badge color="red">New</q-badge>
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>Client: {{clientName}}</q-item-label>
      <q-item-label caption class="text-faded"><q-icon :name="fasPhone" />&nbsp;{{job.client.phone}}&ensp;&ensp;<q-icon :name="fasEnvelope" />&nbsp;{{job.client.email}}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <job-status-select v-model="status" />
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent, computed } from 'vue'
import Job from 'src/models/Job'
import { fasEnvelope, fasPhone } from '@quasar/extras/fontawesome-v6'
import JobStatusSelect from 'components/inputs/JobStatusSelect'
import { useSystemStore } from 'src/stores/system-store'

export default defineComponent({
  components: { JobStatusSelect },
  props: {
    job: {
      type: Job,
      required: true
    }
  },
  setup (props) {
    const systemStore = useSystemStore()

    return {
      fasPhone,
      fasEnvelope,

      lastNewJobId: computed(() => systemStore.lastNewJobId),
      status: computed({
        get: () => props.job.status,
        set: (value) => {
          props.job.setStatus(value)
        }
      }),

      clientName: computed(() => {
        let name = props.job.client.fName

        if (props.job.client.lName !== '')
          name += ' ' + props.job.client.lName

        return name
      })
    }
  }
})
</script>
