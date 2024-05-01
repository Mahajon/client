import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <Skeleton className="h-8 w-1/4" />
        <div className="w-1/4 flex items-center justify-end">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-8 w-1/2 ml-2" />
        </div>
      </div>
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
    </div>
  )
}
