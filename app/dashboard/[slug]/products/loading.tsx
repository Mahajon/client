import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4">
        <Skeleton className="w-full h-8 col-span-2 md:col-span-4 lg:col-span-6" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
      </div>
      <div className="border p-4 flex flex-col gap-2 bg-secondary rounded-lg">
        <Skeleton className="w-32 h-12" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
      </div>
    </div>
  )
}
