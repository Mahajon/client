import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    id: string
    user: {
      email: string
      name: string
      image: string
      role: string
    }
  }

  interface User {
    id: string
    email: string
    name: string
    image: string
    role: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: number
  }
}
