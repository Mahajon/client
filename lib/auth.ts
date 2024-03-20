import { getServerSession } from "next-auth"

import { authOptions } from "@/app/api/auth/[...nextauth]/options"

export async function getSession() {
  return getServerSession(authOptions) as Promise<{
    accessToken: string
    idToken: string
    user: {
      id: string
      name: string
      username: string
      email: string
      image: string
      role: string
    }
  } | null>
}

export async function getUser() {
  const session = await getSession()
  return session?.user
}
