import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
import NextAuth, { NextAuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters"
import { decode, encode } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

import { auth } from "@/lib/firebase"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Social Auth",
      credentials: {},
      authorize: async ({ idToken }: any, _req) => {
        if (idToken) {
          try {
            const response = await fetch(`${process.env.API_BASE_URL}/login`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${idToken}`,
              },
            })
            const user = await response.json()
            if (response.ok && user.uid) {
              return {
                ...user,
                role: user.role ?? "user",
                idToken: idToken,
              }
            }
          } catch (err) {
            return err
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
      }
      return token
    },
  },
}
