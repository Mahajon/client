"use client"

import * as React from "react"
import { useCallback } from "react"
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

const selectValues = [
  { value: "id", label: "ID (Asc)" },
  { value: "-id", label: "ID (Desc)" },
  { value: "name", label: "Name (Asc)" },
  { value: "-name", label: "Name (Desc)" },
  { value: "price", label: "Price (Asc)" },
  { value: "-price", label: "Price (Desc)" },
]

export function OrderingSelector({ searchParams }: { searchParams: any }) {
  const router = useRouter()
  const pathname = usePathname()
  // const searchParams2 = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <Select>
      <SelectTrigger className="w-[120px] h-8">
        <SelectValue placeholder="Order By" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          {selectValues.map((value) => (
            <SelectItem
              key={value.value}
              value={value.value}
              onClick={() => {
                router.replace(
                  pathname + "?" + createQueryString("ordering", value.value)
                )
              }}
            >
              {value.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
