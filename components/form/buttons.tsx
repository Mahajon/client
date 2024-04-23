"use client"

import { Pen, Trash } from "lucide-react"
import { useFormStatus } from "react-dom"

import { LoadingDots, LoadingSpinner } from "../icons"
import { Button } from "../ui/button"

export const CreateButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="sm" disabled={pending} className="h-8 w-24">
      {pending ? <LoadingDots /> : "Create"}
    </Button>
  )
}

export const UpdateButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button size="sm" className="h-8 w-24 gap-1" disabled={pending}>
      {pending ? (
        <LoadingDots />
      ) : (
        <div className="flex items-center gap-2">
          <Pen className="h-3 w-3" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Update
          </span>
        </div>
      )}
    </Button>
  )
}

export const Continue = () => {
  const { pending } = useFormStatus()
  return (
    <Button size="sm" className="h-8 w-24 gap-1" disabled={pending}>
      {pending ? <LoadingDots /> : "Continue"}
    </Button>
  )
}

export const Delete = () => {
  const { pending } = useFormStatus()
  return (
    <Button
      size="sm"
      type="submit"
      disabled={pending}
      variant="destructive"
      className="h-8 w-24"
    >
      {pending ? (
        <LoadingDots />
      ) : (
        <span className="flex items-center gap-1">
          <Trash className="h-3 w-3" />
          Delete
        </span>
      )}
    </Button>
  )
}
