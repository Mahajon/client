"use client"

import { signin } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Google } from "@/components/icons"

export default function LoginBase() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-6">
        <Button
          variant="outline"
          onClick={() => {
            signin("github")
          }}
        >
          <Github className="mr-2 size-5" />
          Github
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            signin("google")
          }}
        >
          <Google className="mr-2 size-5" />
          Google
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-geist-900">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <Button className="w-full">Login</Button>
    </div>
  )
}
