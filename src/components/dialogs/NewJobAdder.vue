<template>
  <q-card flat>
    <q-card-section>
      <div class="row q-col-gutter-x-md items-center">
        <div class="col-auto">
          <q-btn
            :icon="fasArrowLeft"
            color="faded"
            flat
            round
            @click="dismiss"
          />
        </div>
        <div class="col text-h5 text-faded">Create a new job</div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form @submit="createJob">
        <p class="text-caption text-faded q-m">Client details</p>
        <client-name v-model="job.client.fName" autofocus label="First name" :disable="creating" />
        <client-name v-model="job.client.lName" label="Last name" :disable="creating" />
        <client-phone v-model="job.client.phone" label="Phone" :disable="creating" />
        <client-email v-model="job.client.email" label="Email" :disable="creating" />
        <p class="text-caption text-faded q-mt-sm">Job details</p>
        <job-status-select
          v-model="job.status"
          class="q-mt-sm"
          :disable="creating"
        />
        <q-btn
          label="Create job"
          type="submit"
          class="q-mt-xl full-width"
          color="primary"
          :disable="creating"
          :loading="creating"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { fasArrowLeft } from '@quasar/extras/fontawesome-v6'
import ClientName from 'components/inputs/ClientName'
import ClientPhone from 'components/inputs/ClientPhone'
import ClientEmail from 'components/inputs/ClientEmail'
import Job from 'src/models/Job'
import JobStatusSelect from 'components/inputs/JobStatusSelect'
import { useSystemStore } from 'src/stores/system-store'
import { successSnack } from 'src/utils/Notifications'

export default defineComponent({
  components: {
    ClientName,
    ClientPhone,
    ClientEmail,
    JobStatusSelect
  },
  setup () {
    const creating = ref(false)
    const job = ref(new Job())

    const systemStore = useSystemStore()

    const clearJobValues = () => {
      job.value.clear()
    }

    return {
      fasArrowLeft,
      job,
      creating,

      createJob: () => {
        creating.value = true

        setTimeout(() => { // Mimicking request here
          job.value.save().then((id) => {
            creating.value = false
            systemStore.setJobAdder(false)

            clearJobValues()
            successSnack('Job #' + id + ' is created')
            systemStore.setLastNewJobId(id)
          }).catch(() => {
            creating.value = false
          })
        }, 1000)
      },
      dismiss: () => {
        systemStore.setJobAdder(false)
        clearJobValues()
      }
    }
  }
})
</script>
