<template>
  <q-page class="flex flex-center">
    <q-card bordered flat>
      <q-card-section>
        <p class="text-center text-subtitle1 q-mb-none">This is an example of the app for tradies.</p>
      </q-card-section>
      <q-card-section class="text-center">
        <q-btn
          rounded
          color="primary"
          label="View jobs"
          to="/admin/jobs"
          size="lg"
          class="q-px-lg"
          outline
        />
      </q-card-section>
      <q-card-section>
        <p>Featuring tech stack:</p>
        <ul>
          <li>VueJS;</li>
          <li>Vue Router (page routing within SPA);</li>
          <li>Pinia (Store management);</li>
          <li>Quasar Framework;</li>
          <li>Dexie (wrapper for IndexedDB);</li>
          <li>FontAwesome (icons set);</li>
          <li>PWA (Offline mode, desktop mode);</li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
