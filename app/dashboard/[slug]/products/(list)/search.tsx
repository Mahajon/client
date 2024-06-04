"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { useDebouncedCallback } from "use-debounce"

import { cn } from "@/lib/utils"

export default function Search({ className }: { className: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const params = new URLSearchParams(searchParams)
  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }
    if (params.get("page")) {
      params.delete("page")
    }
    router.push(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className={cn(className, "z-0 relative flex flex-1 shrink-0")}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full h-8 rounded-md bg-secondary border py-[9px] pl-10 text-sm outline-2 placeholder:text-muted-foreground"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        placeholder="Search products..."
        defaultValue={searchParams.get("search")?.toString()}
      />
      <SearchIcon className="absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" />
    </div>
  )
}
