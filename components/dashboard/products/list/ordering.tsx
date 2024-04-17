"use client"

import * as React from "react"
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

export function OrderingSelector() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const setOrder = (order: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("ordering", order)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select onValueChange={(e) => setOrder(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Order By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          <SelectItem value="id">ID (Ascending)</SelectItem>
          <SelectItem value="-id">ID (Descending)</SelectItem>
          <SelectItem value="name">Name (Ascending)</SelectItem>
          <SelectItem value="-name">Name (Descending)</SelectItem>
          <SelectItem value="price">Price (Ascending)</SelectItem>
          <SelectItem value="-price">Price (Descending)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
