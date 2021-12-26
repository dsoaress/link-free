import { UsersService } from './users.service'

import type { NextApiRequest, NextApiResponse } from 'next'

class UsersController {
  async createUser(req: NextApiRequest, res: NextApiResponse) {
    const usersService = new UsersService()
    const { username, password, role } = req.body
    const { userRole } = req
    const result = await usersService.createUser(username, password, role, userRole)
    res.json(result)
  }

  async getUser(req: NextApiRequest, res: NextApiResponse) {
    const usersService = new UsersService()
    const { id: userId } = req.params
    const result = await usersService.getUser(+userId)
    res.json(result)
  }

  async getUsers(_req: NextApiRequest, res: NextApiResponse) {
    const usersService = new UsersService()
    const result = await usersService.getUsers()
    res.json(result)
  }

  async getMe(req: NextApiRequest, res: NextApiResponse) {
    const usersService = new UsersService()
    const { userId } = req
    const result = await usersService.getUser(+userId)
    res.json(result)
  }

  async checkUserExists(req: NextApiRequest, res: NextApiResponse) {
    const usersService = new UsersService()
    const { username } = req.body
    const result = await usersService.checkUserExists(username)
    res.json({ isTaken: result })
  }

  async updateUser(req: NextApiRequest, res: NextApiResponse) {
    const usersService = new UsersService()
    const { id: userId } = req.params
    const { oldPassword, password, role } = req.body
    const { userRole } = req
    const result = await usersService.updateUser(+userId, userRole, oldPassword, password, role)
    res.json(result)
  }

  async deleteUser(req: NextApiRequest, res: NextApiResponse) {
    const usersService = new UsersService()
    const { id: userId } = req.params
    const { userRole } = req
    await usersService.deleteUser(+userId, userRole)
    res.status(204).end()
  }
}

export const usersController = new UsersController()
