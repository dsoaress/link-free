export class ExceptionError extends Error {
  status: number

  constructor(message: string, status: number = 400) {
    super(message)
    this.name = 'ExceptionError'
    this.status = status
  }
}
