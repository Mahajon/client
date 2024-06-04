"use client"

import * as React from "react"
import { useCallback, useTransition } from "react"
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
import { LoadingCircle, LoadingSpinner } from "@/components/icons"

const selectValues = [
  { value: "default", label: "Default" },
  { value: "id", label: "ID (Asc)" },
  { value: "-id", label: "ID (Desc)" },
  { value: "name", label: "Name (Asc)" },
  { value: "-name", label: "Name (Desc)" },
  { value: "price", label: "Price (Asc)" },
  { value: "-price", label: "Price (Desc)" },
]

export function OrderFilter({ searchParams }: { searchParams: any }) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const [isPending, startTransition] = useTransition()
  const setorder = useCallback(
    (order: string) => {
      const params = new URLSearchParams(searchParams)
      if (order === "default") params.delete("ordering")
      else params.set("ordering", order)
      startTransition(() => {
        replace(`${pathname}?${params.toString()}`)
      })
    },
    [replace, searchParams]
  )

  return (
    <Select onValueChange={setorder}>
      <SelectTrigger className="w-full h-8">
        <SelectValue placeholder="Order By" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          {selectValues.map((selectValue) => (
            <SelectItem key={selectValue.value} value={selectValue.value}>
              <div className="flex items-center gap-2">
                {selectValue.label}
                {isPending && <LoadingCircle />}
              </div>
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
  const [isPending, startTransition] = useTransition()
  const setStatus = (status: string) => {
    const params = new URLSearchParams(searchParams)
    if (status === "all") {
      params.delete("status")
    } else params.set("status", status)
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`)
    })
  }
  const filters = [
    { value: "all", label: "All" },
    { value: "published", label: "Published" },
    { value: "draft", label: "Draft" },
    { value: "archived", label: "Archived" },
  ]
  return (
    <Select onValueChange={setStatus}>
      <SelectTrigger className="w-full h-8">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Filter By</SelectLabel>
          {filters.map((filter) => (
            <SelectItem key={filter.value} value={filter.value} className="">
              <div className="flex items-center gap-2">
                {filter.label}
                {isPending && <LoadingCircle />}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
