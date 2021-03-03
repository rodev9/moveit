import { NextApiRequest, NextApiResponse } from 'next'

import { connectToDatabase } from './_lib/database'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { max, page } = req.query

  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('users')

  let parsedMax = Number(max)
  let parsedPage = Number(page)

  if (isNaN(parsedMax)) parsedMax = 10
  if (isNaN(parsedPage)) parsedPage = 0

  const users = (
    await collection
      .find()
      .sort({ level: -1, xp: -1, challengesCompleted: -1, _id: 1 })
      .skip(parsedMax * parsedPage)
      .limit(parsedMax)
      .toArray()
  ).map(user => {
    return {
      _id: user._id,
      name: user.name,
      image: user.image,

      xp: user.xp ?? 0,
      level: user.level ?? 1,
      challengesCompleted: user.challengesCompleted ?? 0
    }
  })

  if (users.length < 1) return res.status(404).json(users)

  return res.json(users)
}
