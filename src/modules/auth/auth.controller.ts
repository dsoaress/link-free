import { AuthService } from './auth.service'

import type { NextApiRequest, NextApiResponse } from 'next'

class AuthController {
  async auth(req: NextApiRequest, res: NextApiResponse) {
    const authService = new AuthService()
    const { username, password } = req.body
    const result = await authService.auth(username, password)
    res.status(200).json(result)
  }

  async refreshToken(req: NextApiRequest, res: NextApiResponse) {
    const authService = new AuthService()
    const { refreshToken } = req.body
    const result = await authService.refreshToken(refreshToken)
    res.status(200).json(result)
  }
}

export const authController = new AuthController()
