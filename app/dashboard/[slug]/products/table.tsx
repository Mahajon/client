import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { getToken } from "@/lib/user"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardFooter } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import ActionButton from "./_table/action"
import Empty from "./empty"
import PaginationComponent from "./pagination"

async function getProducts(shopSlug: string, params: string) {
  let data: any
  const token = await getToken()
  const response = await fetch(
    `${process.env.API_BASE_URL}products/?${params}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Shop: shopSlug,
      },
    }
  )
  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  data = await response.json()
  return data
}

export default async function ProductTable({
  slug,
  searchParams,
}: {
  slug: string
  searchParams: any
}) {
  let sParams = new URLSearchParams({
    page: searchParams?.page?.toString() || "1",
  })

  if (searchParams?.search) {
    sParams.append("search", searchParams.search)
  }

  if (searchParams?.ordering) {
    sParams.append("ordering", searchParams.ordering)
  }

  if (searchParams?.status) {
    sParams.append("status", searchParams.status)
  }

  const products = await getProducts(slug, sParams.toString())
  if (products.length === 0) {
    return <Empty />
  } else
    return (
      <>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[20px] sm:table-cell">
                  ID
                </TableHead>
                <TableHead className="hidden w-[20px] md:table-cell">
                  Image
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="hidden md:table-cell">
                  Total Sales
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.results.map((product: any) => (
                <TableRow key={product.id}>
                  <TableCell className="hidden sm:table-cell">
                    {product.id}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="36"
                      src="/placeholder.svg"
                      width="36"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Link href={`/dashboard/${slug}/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.status}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.price}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">25</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(product.created_at).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    <ActionButton slug={slug} id={product.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="w-full flex items-center md:items-end justify-between">
          <div className="w-full text-xs text-muted-foreground">
            Showing{" "}
            <strong>
              {products.items.start}-{products.items.end}
            </strong>{" "}
            of <strong>{products.items.total}</strong> products
          </div>
          <PaginationComponent total={products.pages.total} />
        </CardFooter>
      </>
    )
}
