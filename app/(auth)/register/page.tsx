"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { createAccount, signin } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Google, LoadingCircle, LoadingDots } from "@/components/icons"

export default function RegisterPage() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    // const res = await createAccount(
    //   data.first_name,
    //   data.last_name,
    //   data.email,
    //   data.password
    // )
    // if (res) {
    //   console.log("Account created")
    // } else {
    //   console.log("Error creating account")
    // }
    //set loading to false after 3 seconds
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    // setLoading(false)
  }

  return (
    <div className="mx-auto grid w-[450px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-cal">Create Account</h1>
        <p className="text-balance text-geist-900">
          Create a new account to get started
        </p>
      </div>
      <form onSubmit={(e) => handleRegister(e)} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input
              id="first-name"
              name="first_name"
              placeholder="Max"
              required
              onChange={(e) => {
                setData({ ...data, first_name: e.target.value })
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input
              id="last-name"
              name="last_name"
              placeholder="Robinson"
              required
              onChange={(e) => {
                setData({ ...data, last_name: e.target.value })
              }}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
            title="Please enter a valid email address"
            onChange={(e) => {
              setData({ ...data, email: e.target.value })
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              pattern=".{6,}"
              title="Password must be at least 6 characters"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              id="confirm_password"
              name="confirm_password"
              type="password"
              pattern={data.password}
              title="Passwords do not match"
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
          {...(loading && { disabled: true })}
        >
          {loading && <LoadingCircle />}
          Register
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => signin("google")}
          {...(loading && { disabled: true })}
        >
          <Google className="size-5 mr-2" />
          Login with Google
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => signin("github")}
          {...(loading && { disabled: true })}
        >
          <Github className="size-5 mr-2" />
          Login with Github
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  )
}
