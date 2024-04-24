import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import { NextAuthOptions, getServerSession } from "next-auth"
import { decode, encode } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

async function refreshIdToken(refreshToken: string) {
  const url = `https://securetoken.googleapis.com/v1/token?key=${process.env.FIREBASE_API_KEY}`
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
  })
  if (response.ok) {
    const data = await response.json()
    return data.id_token
  }

  return null
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Social Auth",
      credentials: {},
      authorize: async ({ idToken, refreshToken }: any, _req) => {
        if (idToken) {
          try {
            const response = await fetch(
              `${process.env.API_BASE_URL}auth/me/`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${idToken}`,
                },
              }
            )
            const user = await response.json()
            if (response.ok && user.email) {
              return {
                ...user,
                role: user.role ?? "user",
                name: user.first_name + " " + user.last_name,
                idToken: idToken,
                refreshToken: refreshToken,
              }
            }
          } catch (err) {
            return null
          }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/login",
  //   signOut: "/logout",
  //   // error: "/auth/error",
  //   // verifyRequest: "/auth/verify-request",
  //   // newUser: "/auth/new-user",
  // },

  jwt: { encode, decode },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        // add 60 minutes to the current time
        user.expires = Date.now() + 60 * 60 * 1000
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      if (!url.includes("login")) {
        return url
      }
      return baseUrl
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.refreshToken = user.refreshToken
        token.role = user.role ?? "user"
        token.email = user.email
        token.name = user.name
        token.image = user.picture
        token.plan = user.plan ?? "free"
        // token.expires = user.expires
      }
      if (token.expires) {
        if (Date.now() >= token.expires) {
          const newIdToken = await refreshIdToken(token.refreshToken)
          token.accessToken = newIdToken
          token.expires = Date.now() + 60 * 60 * 1000
        } else {
        }
      } else {
        token.accessToken = user.idToken
        token.expires = user.expires
      }
      return token
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.role = token.role ?? "user"
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        session.user.image = token.image ?? ""
        session.user.plan = token.plan ?? "free"
        session.expires = token.expires
      }
      return session
    },
  },
}

export function getSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions)
}
