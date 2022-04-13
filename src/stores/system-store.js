import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => {
    return {
      jobAdderDialog: false,
      lastNewJobId: 0
    }
  },
  actions: {
    setJobAdder (val) {
      this.jobAdderDialog = val
    },
    setLastNewJobId (id) {
      this.lastNewJobId = id
    }
  }
})
