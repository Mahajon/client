import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    id: string
    accessToken: string
    refreshToken: string
    user: {
      email: string
      name: string
      image: string
      role: string
      plan: string
    }
    expires: number
  }

  interface User {
    id: string
    idToken: string
    refreshToken: string
    email: string
    name: string
    picture: string
    role: string
    plan: string
    expires: number
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string
    refreshToken: string
    role: string
    email: string
    name: string
    image: string
    plan: string
    expires: number
  }
}
