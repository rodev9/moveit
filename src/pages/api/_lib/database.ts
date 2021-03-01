import { MongoClient, Db } from 'mongodb'

let cachedDb: Db

export async function connectToDatabase(uri: string) {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = new URL(uri).pathname.substr(1)

  const db = client.db(dbName)

  cachedDb = db

  return db
}

export async function getUserId(accessToken: string): Promise<string> {
  const db = await connectToDatabase(process.env.MONGODB_URI)

  const dbSessions = db.collection('sessions')
  const dbSession = await dbSessions.findOne({ accessToken })

  return dbSession.userId
}

export async function getDbUser(accessToken: string) {
  const _id = await getUserId(accessToken)

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const users = db.collection('users')
  const user = await users.findOne({ _id })

  return user
}
