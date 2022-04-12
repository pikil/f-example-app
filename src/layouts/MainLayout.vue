<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black" bordered>
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" class="text-decoration-none text-black">{{appName}}</router-link>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          :icon="fasBars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" side="right" behavior="mobile">
      <q-list>
        <q-item-label header>
          <div class="row items-center q-col-gutter-x-md">
            <div class="col">Links</div>
            <div class="col-auto">
              <q-btn
                :icon="fasXmark"
                flat
                round
                color="faded"
                @click="leftDrawerOpen = false"
              />
            </div>
          </div>
        </q-item-label>
        <essential-link v-for="link in Links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-drawer v-model="jobAdder" side="right" behavior="mobile" no-swipe-open no-swipe-close no-swipe-backdrop>
      <new-job-adder v-if="jobAdder" />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  watch
} from 'vue'
import EssentialLink from 'components/EssentialLink'
import Links from 'src/data/Links'
import { fasBars, fasXmark } from '@quasar/extras/fontawesome-v6'
import { useRoute } from 'vue-router'
import { useSystemStore } from 'stores/system-store'
import NewJobAdder from 'src/components/dialogs/NewJobAdder'

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink,
    NewJobAdder
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const route = useRoute()
    const routePath = computed(() => route.path)

    const systemStore = useSystemStore()

    watch(routePath, () => {
      leftDrawerOpen.value = false
    })

    return {
      fasBars,
      fasXmark,
      Links,

      appName: process.env.productName,

      jobAdder: computed({
        get: () => systemStore.jobAdderDialog,
        set: (val) => {
          systemStore.setJobAdder(val)
        }
      }),

      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
