import { User } from 'next-auth'

declare module 'next-auth' {
  export interface User extends User {
    level?: number
    xp?: number
    challengesCompleted?: number
  }
}
