import { FilesService } from './files.services'

import type { NextApiRequest, NextApiResponse } from 'next'

class FilesController {
  async updateFile(req: NextApiRequest, res: NextApiResponse) {
    const filesService = new FilesService()
    const originalname = req.file?.originalname
    const buffer = req.file?.buffer
    const result = await filesService.uploadFile(buffer, originalname)
    res.json(result)
  }
}

export const filesController = new FilesController()
