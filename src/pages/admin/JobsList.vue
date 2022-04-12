<template>
  <div class="row items-center q-col-gutter-x-md">
    <div class="col">
      <h1 class="text-h4 q-my-lg">{{$route.name}}</h1>
    </div>
    <div class="col-auto">
      <q-btn
        :icon="fasPlus"
        outline
        round
        @click="showJobDialog"
      />
    </div>
  </div>
  <q-infinite-scroll ref="loader" :disable="allLoaded" @load="loadJobs">
    <q-list class="border-radius-10 q-pb-sm q-mt-lg" bordered>
      <q-item class="q-pb-lg">
        <q-item-section>
          <q-item-label>
            <div class="row q-col-gutter-x-md">
              <div class="col-auto">
                <q-input
                  v-model="filter"
                  class="w-100"
                  label="Filter"
                  dense
                  debounce="800"
                />
              </div>
              <div class="col-auto">
                <q-select
                  v-model="sort"
                  class="w-100"
                  label="Sort"
                  :dropdown-icon="fasAngleDown"
                  dense
                  :options="sortOptions"
                />
              </div>
            </div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <job-row v-for="job in jobs" :key="job.id" :job="job" />
    </q-list>
    <template #loading>
      <div class="row justify-center">
        <q-spinner-dots color="faded" size="50px" />
      </div>
    </template>
  </q-infinite-scroll>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
import { fasAngleDown, fasPlus } from '@quasar/extras/fontawesome-v6'
import { useSystemStore } from 'src/stores/system-store'
import { DB } from 'src/data/DB'
import { JobListPageSize } from 'src/data/JobConstants'
import Job from 'src/models/Job'
import JobClient from 'src/models/JobClient'
import JobRow from 'src/components/rows/JobRow'

const sortOptions = [
  {
    label: 'Newest first',
    value: 0
  },
  {
    label: 'Oldest first',
    value: 1
  },
  {
    label: 'Scheduled first',
    value: 2
  },
  {
    label: 'Completed first',
    value: 3
  }
]

export default defineComponent({
  components: {
    JobRow
  },
  setup () {
    const newJobDialog = ref(false)
    const systemStore = useSystemStore()

    const allLoaded = ref(false)
    const jobs = ref([])
    const loader = ref(null)

    const filter = ref('')
    const sort = ref(null)

    const resetLoader = () => {
      jobs.value = []
      loader.value.reset()
      loader.value.resume()
      loader.value.trigger()
      allLoaded.value = false
    }

    watch(filter, resetLoader)
    watch(sort, resetLoader)

    return {
      fasPlus,
      fasAngleDown,
      newJobDialog,
      sortOptions,

      jobs,
      allLoaded,
      filter,
      sort,
      loader,

      showJobDialog: () => {
        systemStore.setJobAdder(true)
      },

      loadJobs: (page, done) => {
        DB.jobs
          .orderBy('timeCreated').reverse()
          .limit(JobListPageSize)
          .offset((page - 1) * JobListPageSize)
          .toArray()
          .then((dbJobs) => {
            if (dbJobs.length < JobListPageSize)
              allLoaded.value = true

            jobs.value.push(
              ...dbJobs.map(({
                id,
                clientFName,
                clientLName,
                clientPhone,
                clientEmail,
                timeCreated,
                status,
                notes
              }) => new Job(
                id,
                status,
                new JobClient(
                  clientFName,
                  clientLName,
                  clientEmail,
                  clientPhone
                ),
                notes,
                timeCreated
              ))
            )

            done()
          })
      }
    }
  }
})
</script>
