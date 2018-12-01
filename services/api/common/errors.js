export class StatusError extends Error {
  status
  constructor({ msg, status }) {
    super(msg)
    this.status = status
    Error.captureStackTrace(this, this.constructor)
  }
}
