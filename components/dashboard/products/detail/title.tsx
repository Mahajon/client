"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { useFormStatus } from "react-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/icons"

export default function TitleSection({
  name,
  status,
}: {
  name: string
  status: string
}) {
  const router = useRouter()
  const { pending } = useFormStatus()
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        className="size-7"
        onClick={router.back}
      >
        <ChevronLeft className="size-4" />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="flex-1 shrink-0 whitespace-nowrap font-cal text-xl sm:grow-0">
        {name}
      </h1>
      <Badge variant="outline" className="ml-auto sm:ml-0">
        {status[0].toUpperCase() + status.slice(1)}
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm" disabled={pending}>
          {pending ? (
            <div className="w-full flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            "Save Product"
          )}
        </Button>
      </div>
    </div>
  )
}
