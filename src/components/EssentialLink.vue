<template>
  <q-item
    clickable
    :tag="tag"
    :target="target"
    :href="href"
    :to="to"
    exact
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{label}}</q-item-label>
      <q-item-label caption>{{caption}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    label: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    icon: String,
    to: String,
    href: String,
    target: String,
    tag: String
  }
})
</script>
