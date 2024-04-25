"use client"

import * as React from "react"
import { useCallback } from "react"
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

const selectValues = [
  { value: "id", label: "ID (Asc)" },
  { value: "-id", label: "ID (Desc)" },
  { value: "name", label: "Name (Asc)" },
  { value: "-name", label: "Name (Desc)" },
  { value: "price", label: "Price (Asc)" },
  { value: "-price", label: "Price (Desc)" },
]

export function OrderFilter({ searchParams }: { searchParams: any }) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const setorder = (order: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("ordering", order)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select>
      <SelectTrigger className="w-full h-8">
        <SelectValue placeholder="Order By" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          {selectValues.map((value) => (
            <SelectItem
              key={value.value}
              value={value.value}
              onClick={() => setorder(value.value)}
            >
              {value.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

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
      <SelectTrigger className="w-full h-8">
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
