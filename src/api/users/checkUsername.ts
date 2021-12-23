import { prisma } from 'services/prisma'

import type { NextApiRequest, NextApiResponse } from 'next'

export async function checkUsername(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.body

  const isTaken = await prisma.user.findUnique({
    where: { username: username.toLowerCase().trim() }
  })

  res.status(200).json({ isTaken: !!isTaken })
}
