import Link from "next/link"
import { Ghost, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CreateNewShop() {
  return (
    <Link href="/dashboard/create-new-shop" className="h-full">
      <Card className="bg-primary h-full border-2 border-dashed rounded flex flex-col items-center justify-center">
        <div className="">
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2"
          >
            <PlusCircle />
            Create New Shop
          </Button>
        </div>
      </Card>
    </Link>
  )
}
