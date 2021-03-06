import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { getDbUser } from '../../../services/db'

export default (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: ''
      }),
      Providers.Discord({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        scope: 'identify'
      }),
      Providers.GitLab({
        clientId: process.env.GITLAB_CLIENT_ID,
        clientSecret: process.env.GITLAB_CLIENT_SECRET
      })
    ],
    pages: {
      signIn: '/login',
      newUser: '/welcome'
    },

    database: process.env.NEXTAUTH_MONGODB_URI,

    callbacks: {
      async session(session) {
        const user = await getDbUser(session.accessToken)

        session.user.xp = user.xp ?? 0
        session.user.level = user.level ?? 1
        session.user.challengesCompleted = user.challengesCompleted ?? 0

        return session
      },

      async redirect(url, baseUrl) {
        return url.startsWith(baseUrl) ? url : baseUrl + url
      }
    }
  })
