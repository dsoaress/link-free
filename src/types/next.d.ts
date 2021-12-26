import { IncomingMessage } from 'http'

import type { Role } from '@prisma/client'

declare module 'next' {
  export interface NextApiRequest extends IncomingMessage {
    userId: string
    userRole: Role
    file?: {
      originalname: string
      buffer: Buffer
    }
    params: {
      [key: string]: string | string[]
    }
  }
}
