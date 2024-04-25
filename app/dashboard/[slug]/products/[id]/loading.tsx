import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="py-8 px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-56" />
        <Skeleton className="w-full h-56" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-36" />
        <Skeleton className="w-full h-36" />
        <Skeleton className="w-full h-36" />
      </div>
    </div>
  )
}
