"use client"

import { signin } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Google } from "@/components/icons"

import LoginBase from "./base"

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-cal text-2xl">Login</DialogTitle>
          <DialogDescription>
            Sign in to your account to continue.
          </DialogDescription>
        </DialogHeader>

        <LoginBase />
      </DialogContent>
    </Dialog>
  )
}
