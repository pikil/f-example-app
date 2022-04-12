import Dexie from 'dexie'

export const DB = new Dexie('exampleDB')

DB.version(1).stores({
  jobs: '++id, status, clientFName, clientLName, clientPhone, clientEmail, timeCreated' // Primary key and indexed props
})
