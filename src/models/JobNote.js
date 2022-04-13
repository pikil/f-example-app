export default class JobNote {
  constructor (text, time) {
    this.text = text
    this.time = time
  }

  get time () { return this._time }
  set time (value) {
    value = parseInt(value)
    this._time = !Number.isNaN(value) && value > 0 ? value : Date.now()
  }

  get text () { return this._text }
  set text (value) { this._text = value.substring(0, 255) }
}
