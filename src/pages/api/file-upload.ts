import { nc } from 'services/nc'
import { multerMiddleware } from 'middlewares/multer.middleware'
import { filesController } from 'modules/files/files.controller'
import { authMiddleware } from 'middlewares/auth.middleware'

export const config = {
  api: { bodyParser: false }
}

const handler = nc.post(authMiddleware, multerMiddleware, filesController.updateFile)

export default handler
