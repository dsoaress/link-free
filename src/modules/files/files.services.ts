import { UploadClient } from '@uploadcare/upload-client'
import cuid from 'cuid'

import { env } from 'constants/env'
import { ExceptionError } from 'utils/error'

export class FilesService {
  async uploadFile(buffer?: Buffer, originalname?: string) {
    const client = new UploadClient({ publicKey: env.UPLOADCARE_PUBLIC_KEY })

    if (!buffer || !originalname) {
      throw new ExceptionError('No file provided')
    }

    if (!originalname.toLowerCase().match(/\.(jpg|jpeg|png)$/)) {
      throw new ExceptionError('Invalid file type')
    }

    const response = await client.uploadFile(buffer, {
      fileName: `${cuid()}-${originalname}`
    })

    if (!response) {
      throw new ExceptionError('No file uploaded')
    }

    return { file: response.cdnUrl }
  }
}
