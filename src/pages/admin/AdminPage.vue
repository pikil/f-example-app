<template>
  <h1 class="text-h3 q-my-lg">{{$route.name}}</h1>
  <div class="row q-col-gutter-xl justify-center">
    <div v-for="block in AdminLinksBlocks" :key="block.name" class="col-12 col-sm-6">
      <q-list bordered class="border-radius-10 q-pb-sm">
        <q-item-label header>{{block.name}}</q-item-label>
        <q-item v-for="link in block.links" :key="link.to" clickable :to="link.to">
          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import AdminLinksBlocks from 'src/data/AdminLinksBlocks'

export default defineComponent({
  setup () {
    return {
      AdminLinksBlocks
    }
  }
})
</script>
