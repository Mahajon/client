"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function OrderingSelector({ searchParams }: { searchParams: any }) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const setOrder = (order: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("ordering", order)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select onValueChange={setOrder}>
      <SelectTrigger className="w-[120px] h-8">
        <SelectValue placeholder="Order By" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          <SelectItem value="id">ID (Asc)</SelectItem>
          <SelectItem value="-id">ID (Desc)</SelectItem>
          <SelectItem value="name">Name (Asc)</SelectItem>
          <SelectItem value="-name">Name (Desc)</SelectItem>
          <SelectItem value="price">Price (Asc)</SelectItem>
          <SelectItem value="-price">Price (Desc)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
