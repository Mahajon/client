"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ListFilter } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
    //   <DropdownMenu>
    //     <DropdownMenuTrigger asChild>
    // <Button variant="outline" size="sm" className="h-8 gap-1">
    //   <ListFilter className="h-3.5 w-3.5" />
    //   <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
    //     Filter
    //   </span>
    // </Button>
    //     </DropdownMenuTrigger>
    //     <DropdownMenuContent align="end">
    //       <DropdownMenuLabel>Order by</DropdownMenuLabel>
    //       <DropdownMenuSeparator />
    //       <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
    //       <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
    //       <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
    //     </DropdownMenuContent>
    //   </DropdownMenu>
  )
}
