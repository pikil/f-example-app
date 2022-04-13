<template>
  <q-card class="full-height min-w-300">
    <q-card-section>
      <div class="row q-col-gutter-x-sm items-center">
        <div class="col-auto">
          <q-btn
            :icon="fasArrowLeft"
            color="faded"
            flat
            round
            v-close-popup
          />
        </div>
        <div class="col text-faded text-h6">Job #{{job.id}}</div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-input :model-value="job.client.fName" label="First name" readonly dense />
      <q-input :model-value="job.client.lName" label="Last name" readonly dense />
      <q-input :model-value="job.client.email" label="Email" readonly dense />
      <q-input :model-value="job.client.phone" label="Phone" readonly dense />
    </q-card-section>
    <q-card-section>
      <job-status-select v-model="status" />
    </q-card-section>
    <q-card-section>
      <q-list class="q-pa-none">
        <q-item>
          <q-item-section>
            <q-item-label>
              <q-input
                v-model="newNoteText"
                dense
                outline
                placeholder="Add a note"
                maxlength="255"
                :disable="addingNote"
                @keyup.enter="addNote"
              >
                <template #append>
                  <q-btn
                    :icon="matSend"
                    color="primary"
                    flat
                    round
                    :loading="addingNote"
                    :disable="addingNote || newNoteText === ''"
                    @click="addNote"
                  />
                </template>
              </q-input>
            </q-item-label>
          </q-item-section>
        </q-item>
        <job-note-row v-for="note in job.notes" :key="note.time" :note="note" />
      </q-list>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, ref, computed } from 'vue'
import Job from 'src/models/Job'
import { fasArrowLeft } from '@quasar/extras/fontawesome-v6'
import JobStatusSelect from 'components/inputs/JobStatusSelect'
import { matSend } from '@quasar/extras/material-icons'
import JobNoteRow from 'components/rows/JobNoteRow'

export default defineComponent({
  components: {
    JobStatusSelect,
    JobNoteRow
  },
  props: {
    job: {
      type: Job,
      required: true
    }
  },
  setup (props) {
    const addingNote = ref(false)
    const newNoteText = ref('')

    return {
      fasArrowLeft,
      matSend,

      newNoteText,
      addingNote,

      status: computed({
        get: () => props.job.status,
        set: (value) => {
          props.job.setStatus(value)
        }
      }),

      addNote: () => {
        addingNote.value = true

        setTimeout(() => {
          props.job.addNote(newNoteText.value)

          addingNote.value = false
          newNoteText.value = ''
        }, 500)
      }
    }
  }
})
</script>
