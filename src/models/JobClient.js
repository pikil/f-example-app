export default class JobClient {
  constructor (fName, lName, email, phone) {
    this.fName = fName ?? ''
    this.lName = lName ?? ''
    this.email = email ?? ''
    this.phone = phone ?? ''
  }

  get fName () { return this._fName }
  set fName (value) { this._fName = value.toString() }

  get lName () { return this._lName }
  set lName (value) { this._lName = value.toString() }

  get email () { return this._email }
  set email (value) { this._email = value.toString() }

  get phone () { return this._phone }
  set phone (value) { this._phone = value.toString() }
}
