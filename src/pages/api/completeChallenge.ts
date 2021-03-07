import { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

import { getSession } from 'next-auth/client'
import { connectToDatabase, getUserId } from '../../services/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')

  const {
    challenge: { amount },
    captchaToken
  } = req.body

  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: process.env.CAPTCHA_SECRET,
        response: captchaToken
      }
    }
  )

  if (!response.data.success) return res.status(401).json({ success: false })

  const session = await getSession({ req })

  const _id = await getUserId(session.accessToken)
  const db = await connectToDatabase(process.env.MONGODB_URI)

  const users = db.collection('users')
  const user = await users.findOne({ _id })

  let xp = user.xp ?? 0
  let level = user.level ?? 1
  let challengesCompleted = user.challengesCompleted ?? 0

  const xpToNextLevel = Math.pow((level + 1) * 4, 2)

  xp += amount

  if (xp >= xpToNextLevel) {
    xp -= xpToNextLevel

    level += 1
  }

  challengesCompleted += 1

  await users.findOneAndUpdate(
    { _id },
    { $set: { xp, level, challengesCompleted } }
  )

  res.json({ xp, level, challengesCompleted })
}
