import { ChevronLeft } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function TitleSection({
  name,
  status,
}: {
  name: string
  status: string
}) {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="icon" className="size-7">
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
        <Button size="sm">Save Product</Button>
      </div>
    </div>
  )
}
