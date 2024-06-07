import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

import NewShopPage from "./page"

export default function NewShop() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <div className="w-full mb-2">
          <Link
            href="/dashboard"
            className="text-sm font-bold text-gray-500 dark:text-gray-400"
          >
            <Button
              variant="link"
              size="sm"
              className="flex gap-1 items-center px-0"
            >
              <ChevronLeft />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        <NewShopPage />
      </div>
    </div>
  )
}
