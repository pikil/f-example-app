import { DB } from 'src/data/DB'
import { InitialJobStatus } from 'src/data/JobConstants'
import JobStatuses from 'src/data/JobStatuses'
import JobClient from './JobClient'
import JobNote from './JobNote'

export default class Job {
  constructor (id, status, client, notes, timeCreated) {
    this.reset(id, status, client, notes, timeCreated)
  }

  get id () { return this._id }

  get status () { return this._status }
  set status (status) {
    status = parseInt(status)
    this._status = (!Number.isNaN(this._status) && JobStatuses.findIndex(({ value }) => value === status) >= 0) ? status : InitialJobStatus
  }

  get client () { return this._client }
  set client (client) { this._client = client || new JobClient() }

  get notes () { return this._notes }
  set notes (notes) { this._notes = (Array.isArray(notes)) ? notes.map(({ text, time }) => new JobNote(text, time)) : [] }

  get timeCreated () { return this._timeCreated }
  set timeCreated (timeCreated) {
    timeCreated = parseInt(timeCreated)
    this._timeCreated = (!Number.isNaN(timeCreated) && timeCreated > 0) ? timeCreated : Date.now()
  }

  setStatus (status) {
    this.status = status
    this.save()
  }

  async addNote (text) {
    this.notes.unshift(new JobNote(text))
    this.save()
  }

  reset (id, status, client, notes, timeCreated) {
    this._id = id
    this.status = status
    this.client = client
    this.notes = notes
    this.timeCreated = timeCreated
  }

  clear () {
    this.reset()
  }

  async save () {
    const obj = {
      id: null,
      clientFName: this.client.fName,
      clientLName: this.client.lName,
      clientPhone: this.client.phone,
      clientEmail: this.client.email,
      timeCreated: this.timeCreated,
      status: this.status,
      notes: this.notes.map((n) => { return { text: n.text, time: n.time } })
    }

    const id = parseInt(this.id)

    if (!Number.isNaN(id) && id > 0) {
      obj.id = id
    } else {
      delete obj.id
      obj.timeCreated = Date.now()
    }

    const savedId = await DB.jobs.put(obj)
    return savedId
  }
}
