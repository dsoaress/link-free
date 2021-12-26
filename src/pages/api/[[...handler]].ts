import { nc } from 'services/nc'
import { authMiddleware } from 'middlewares/auth.middleware'
import { dataController } from 'modules/data/data.controller'
import { authController } from 'modules/auth/auth.controller'
import { usersController } from 'modules/users/users.controller'

const handler = nc
  .post('/api/auth', authController.auth)
  .post('/api/auth/refresh-token', authController.refreshToken)

  .use(authMiddleware)

  .get('/api/data', dataController.getData)
  .put('/api/data', dataController.updateData)

  .get('/api/users', usersController.getUsers)
  .get('/api/users/me', usersController.getMe)
  .get('/api/users/:id', usersController.getUser)
  .post('/api/users/check-username', usersController.checkUserExists)
  .post('/api/users', usersController.createUser)
  .patch('/api/users/:id', usersController.updateUser)
  .delete('/api/users/:id', usersController.deleteUser)

export default handler
