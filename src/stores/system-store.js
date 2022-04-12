import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => {
    return {
      jobAdderDialog: false
    }
  },
  actions: {
    setJobAdder (val) {
      this.jobAdderDialog = val
    }
  }
})
