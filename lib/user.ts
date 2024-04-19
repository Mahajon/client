import { getServerSession } from "next-auth"

import { authOptions } from "@/app/api/auth/[...nextauth]/options"

async function getUserSession() {
  const session = await getServerSession(authOptions)
  return session
}

async function getUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

const getToken = async () => {
  const session = await getUserSession()
  return session?.accessToken
}

export { getUser, getUserSession, getToken }
