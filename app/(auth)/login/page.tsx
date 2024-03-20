"use client"

import Link from "next/link"
import { signIn } from "next-auth/react"

import { buttonVariants } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">Welcome back</h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          Sign in to continue
        </p>
      </div>

      <div className="grid gap-4">
        <button
          onClick={() => signIn("github")}
          className={buttonVariants({ variant: "default" })}
        >
          Sign in with GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign in with Google
        </button>
      </div>

      <div className="flex flex-col items-center mt-4">
        <p className="text-gray-600 dark:text-gray-400">
          Don't have an account?
        </p>
        <Link
          href="/auth/signup"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </section>
  )
}
