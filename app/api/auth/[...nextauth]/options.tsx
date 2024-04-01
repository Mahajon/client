import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
import NextAuth, { NextAuthOptions, getServerSession } from "next-auth"
import { Adapter } from "next-auth/adapters"
import { decode, encode } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

import { auth } from "@/lib/firebase"

const refreshIdToken = async () => {
  auth.onAuthStateChanged(async function (user) {
    if (user) {
      const newIdToken = await user.getIdToken(true)
      return newIdToken
    }
  })
  return null
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Social Auth",
      credentials: {},
      authorize: async ({ idToken }: any, _req) => {
        if (idToken) {
          try {
            const response = await fetch(
              `${process.env.API_BASE_URL}users/me/`,
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
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
  }) as Adapter,
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
    async session({ session, user, token }) {
      if (token) {
        session.user.role = token.role ?? "user"
        session.accessToken = token.accessToken
        session.user.image = token.image ?? ""
        session.user.plan = token.plan ?? "free"
        session.expires = token.expires
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.accessToken = user.idToken
        token.role = user.role ?? "user"
        token.email = user.email
        token.name = user.name
        token.image = user.picture
        token.plan = user.plan ?? "free"
        token.expires = user.expires
      }
      if (Date.now() > token.expires) {
        const newIdToken = await refreshIdToken()
        if (newIdToken) {
          token.accessToken = newIdToken
          token.expires = Date.now() + 60 * 60 * 1000
        }
      }
      return token
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
