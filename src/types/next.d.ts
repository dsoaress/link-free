import { IncomingMessage } from 'http'

declare module 'next' {
  export interface NextApiRequest extends IncomingMessage {
    userId: string
    userRole: string
  }
}
