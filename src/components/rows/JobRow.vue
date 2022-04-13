<template>
  <q-item :class="bgClass">
    <q-item-section side top style="padding-top: 6px">
      <q-item-label>Job #{{job.id}}</q-item-label>
      <q-item-label v-if="job.id === lastNewJobId">
        <q-badge color="red">New</q-badge>
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        <div class="row q-col-gutter-x-sm items-center">
          <div class="col-auto">
            <strong>{{clientName}}</strong>
          </div>
          <div class="col-auto">
            <q-btn
              color="primary"
              :icon="fasPencil"
              flat
              round
              size="sm"
              @click="showDetails"
            />
          </div>
          <div v-if="job.notes.length" class="col-auto text-bold text-amber-10">{{job.notes.length}} note(s)</div>
        </div>
      </q-item-label>
      <q-item-label caption class="text-faded q-py-xs">
        <q-icon :name="fasClock" />&nbsp;<em>{{jobTime}}</em>&ensp;&ensp;
      </q-item-label>
      <q-item-label caption class="text-faded q-py-xs">
        <q-icon :name="fasEnvelope" />&nbsp;{{job.client.email}}
      </q-item-label>
      <q-item-label caption class="text-faded q-py-xs">
        <q-icon :name="fasPhone" />&nbsp;{{job.client.phone}}
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
      <job-status-select v-model="status" />
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent, computed } from 'vue'
import Job from 'src/models/Job'
import {
  fasClock,
  fasEnvelope,
  fasPencil,
  fasPhone
} from '@quasar/extras/fontawesome-v6'
import JobStatusSelect from 'components/inputs/JobStatusSelect'
import { useSystemStore } from 'src/stores/system-store'
import { date } from 'quasar'
import { StandardDateFormat } from 'src/data/JobConstants'

const { formatDate } = date

export default defineComponent({
  components: { JobStatusSelect },
  props: {
    job: {
      type: Job,
      required: true
    }
  },
  setup (props, { emit }) {
    const systemStore = useSystemStore()

    return {
      fasPhone,
      fasEnvelope,
      fasClock,
      fasPencil,

      jobTime: formatDate(new Date(props.job.timeCreated), StandardDateFormat),
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
      }),
      bgClass: computed(() => {
        let classes = 'bg-'

        switch (props.job.status) {
          case 1: classes += 'light-blue-1'; break
          case 2: classes += 'purple-1'; break
          case 3: classes += 'yellow-2'; break
          case 4: classes += 'green-2'; break
          case 0:
          default:
            classes += 'grey-2'
            break
        }

        return classes
      }),

      showDetails: () => {
        emit('details', props.job)
      }
    }
  }
})
</script>
