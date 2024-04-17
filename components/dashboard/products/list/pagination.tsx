"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { SearchIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationComponent({ total }: { total: number }) {
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get("page") || "1")
  const pathname = usePathname()
  const { replace } = useRouter()

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem onClick={() => setPage(page - 1)}>
            <PaginationPrevious />
          </PaginationItem>
        )}
        {page > 2 && (
          <PaginationItem onClick={() => setPage(1)}>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
        )}
        {page > 1 && (
          <PaginationItem onClick={() => setPage(page - 1)}>
            <PaginationLink>{page - 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {total > page && (
          <PaginationItem onClick={() => setPage(page + 1)}>
            <PaginationLink>{page + 1}</PaginationLink>
          </PaginationItem>
        )}
        {total > page + 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {total > page + 2 && (
          <PaginationItem onClick={() => setPage(total)}>
            <PaginationLink>{total}</PaginationLink>
          </PaginationItem>
        )}
        {total > page && (
          <PaginationItem onClick={() => setPage(page + 1)}>
            <PaginationNext />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
