import { DataService } from './data.service'

import type { NextApiRequest, NextApiResponse } from 'next'

class DataController {
  async getData(_req: NextApiRequest, res: NextApiResponse) {
    const dataService = new DataService()
    const result = await dataService.getData()
    res.json(result)
  }

  async updateData(req: NextApiRequest, res: NextApiResponse) {
    const dataService = new DataService()
    const result = await dataService.updateData(req.body.data)
    res.json(result)
  }
}

export const dataController = new DataController()
