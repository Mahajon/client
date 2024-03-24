import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    id: string
    accessToken: string
    user: {
      email: string
      name: string
      image: string
      role: string
      plan: string
    }
  }

  interface User {
    id: string
    idToken: string
    email: string
    name: string
    picture: string
    role: string
    plan: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string
    role: string
    email: string
    name: string
    image: string
    plan: string
  }
}
