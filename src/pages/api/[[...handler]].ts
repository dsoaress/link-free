import { nc } from 'utils/nc'
import { authMiddleware } from 'utils/authMiddleware'
import {
  auth,
  checkUsername,
  createUser,
  deleteUser,
  getData,
  getUserById,
  getUsers,
  me,
  refreshToken,
  updateData,
  updateUser
} from 'api'

const handler = nc
  .post('/api/auth', auth)
  .post('/api/auth/refresh-token', refreshToken)

  .use(authMiddleware)

  .get('/api/data', getData)
  .put('/api/data', updateData)

  .get('/api/users', getUsers)
  .get('/api/me', me)
  .get('/api/users/:id', getUserById)
  .post('/api/users/check-username', checkUsername)
  .post('/api/users', createUser)
  .patch('/api/users/:id', updateUser)
  .delete('/api/users/:id', deleteUser)

export default handler
