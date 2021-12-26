import multer from 'multer'

const upload = multer({ storage: multer.memoryStorage() })

export const multerMiddleware = upload.single('file')
