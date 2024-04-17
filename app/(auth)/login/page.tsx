"use client"

import Image from "next/image"
import Link from "next/link"

import { signin } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Google } from "@/components/icons"

export default function LoginPage() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="font-cal text-3xl">Login</h1>
        <p className="text-geist-900 text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => signin("google")}
        >
          <Google className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => signin("github")}
        >
          <Github className="mr-2 size-5" />
          Login with Github
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  )
}
