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
    <q-list class="border-radius-10 q-mt-lg overflow-hidden" bordered separator>
      <q-item class="q-pb-lg">
        <q-item-section>
          <q-item-label>
            <div class="row q-col-gutter-x-md">
              <div class="col-auto">
                <q-input
                  v-model="filter"
                  class="w-150"
                  label="Filter"
                  dense
                  debounce="800"
                />
              </div>
              <div class="col-auto">
                <q-select
                  v-model="sort"
                  class="w-150"
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
import {
  defineComponent,
  ref,
  computed,
  watch,
  nextTick
} from 'vue'
import { fasAngleDown, fasPlus } from '@quasar/extras/fontawesome-v6'
import { useSystemStore } from 'src/stores/system-store'
import { DB } from 'src/data/DB'
import { JobListPageSize } from 'src/data/JobConstants'
import Job from 'src/models/Job'
import JobClient from 'src/models/JobClient'
import JobRow from 'src/components/rows/JobRow'
import { sortOptions } from 'src/data/Inputs'

export default defineComponent({
  components: {
    JobRow
  },
  setup () {
    const newJobDialog = ref(false)
    const systemStore = useSystemStore()
    const lastNewJobId = computed(() => systemStore.lastNewJobId)

    const allLoaded = ref(false)
    const jobs = ref([])
    const loader = ref(null)

    const filter = ref('')
    const sort = ref(sortOptions[0])

    const resetLoader = () => {
      jobs.value = []
      loader.value.reset()

      nextTick().then(() => {
        allLoaded.value = false
      })
    }

    watch(filter, resetLoader)
    watch(sort, resetLoader)
    watch(lastNewJobId, resetLoader)

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
        let query = DB.jobs

        switch (sort.value.value) {
          case 1: query = query.orderBy('id'); break
          case 2: query = query.orderBy('status'); break
          case 3: query = query.orderBy('status').reverse(); break
          case 0:
          default:
            query = query.orderBy('id').reverse(); break
        }

        if (filter.value !== '') {
          const loweredFilter = filter.value.toLowerCase()

          query = query.filter(({
            clientFName,
            clientLName,
            clientEmail,
            clientPhone
          }) => {
            switch (true) {
              case clientFName.toLowerCase().includes(loweredFilter):
              case clientLName.toLowerCase().includes(loweredFilter):
              case clientEmail.toLowerCase().includes(loweredFilter):
              case clientPhone.toLowerCase().includes(loweredFilter):
                return true

              default:
                return false
            }
          })
        }

        query
          .offset((page - 1) * JobListPageSize)
          .limit(JobListPageSize)
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
