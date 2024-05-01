import { Skeleton } from "@/components/ui/skeleton"

import LoadingPage from "./[id]/loading"

export default function Loading() {
  return (
    <div className="grid md:grid-cols-2 divide-x">
      <div className="m-8 p-8 bg-secondary border rounded flex flex-col gap-4">
        <div className="flex justify-between">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-8 w-1/6" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>

      <div className="md:hidden p-8">
        <LoadingPage />
      </div>
    </div>
  )
}
