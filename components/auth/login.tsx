"use client"

import { signin } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Google } from "@/components/icons"

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            onClick={() => {
              signin("google")
            }}
          >
            <div className="flex items-center justify-center gap-x-2">
              <Google className="size-8" />
              <span className="font-medium">Sign in With Google</span>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
