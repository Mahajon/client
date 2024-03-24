import { get } from "http"
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  linkWithPopup,
  signInAnonymously,
  signInWithPopup,
  signInWithRedirect,
  type AuthProvider,
} from "firebase/auth"
import { getServerSession } from "next-auth"
import { signIn } from "next-auth/react"
import { toast } from "sonner"

import { auth } from "@/lib/firebase"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

const handleAnonymousSignIn = () => {
  signInAnonymously(auth)
    .then((credential) => credential.user.getIdToken(true))
    .then((idToken) => {
      signIn("credentials", {
        idToken,
        callbackUrl: "/",
      })
    })
    .catch((err) => console.error(err))
}

const signin = async (provider: string) => {
  let authProvider: AuthProvider
  switch (provider) {
    case "github":
      authProvider = new GithubAuthProvider()
      break
    case "google":
      authProvider = new GoogleAuthProvider()
      break
    default:
      authProvider = new GoogleAuthProvider()
  }
  signInWithPopup(auth, authProvider)
    .then((result: any) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
      const idToken = result._tokenResponse.idToken as string
      // signIn("credentials", {
      //   idToken,
      // })
      const res = signIn("credentials", { idToken })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      let credential
      switch (provider) {
        case "github":
          credential = GithubAuthProvider.credentialFromError(error)
          break
        case "google":
          credential = GoogleAuthProvider.credentialFromError(error)
          break
        default:
          credential = GoogleAuthProvider.credentialFromError(error)
      }
      console.log(errorMessage)
      toast.error(errorMessage)
    })
  return
}

export { signin }
