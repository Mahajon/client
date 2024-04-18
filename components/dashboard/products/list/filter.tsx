"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function StatusFilter({ searchParams }: { searchParams: any }) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const setStatus = (status: string) => {
    const params = new URLSearchParams(searchParams)
    if (status === "all") {
      params.delete("status")
    } else params.set("status", status)
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <Select onValueChange={setStatus}>
      <SelectTrigger className="w-[120px] h-8">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Filter By</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
