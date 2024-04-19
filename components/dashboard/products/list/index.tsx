import { Suspense } from "react"

import { getProducts } from "@/lib/actions/product"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Empty from "./empty"
import PaginationComponent from "./pagination"
import ProductTable from "./table"

export default async function ProductListPage({
  slug,
  params,
}: {
  slug: string
  params?: {
    search?: string
    page?: number
    ordering?: string
    status?: string
  }
}) {
  // construct the url using the params
  let searchParams = new URLSearchParams({
    shop: slug,
    page: params?.page?.toString() || "1",
  })

  if (params?.search) {
    searchParams.append("search", params.search)
  } else {
    searchParams.delete("search")
  }

  if (params?.ordering) {
    searchParams.append("ordering", params.ordering)
  } else {
    searchParams.delete("ordering")
  }

  if (params?.status) {
    searchParams.append("status", params.status)
  } else {
    searchParams.delete("status")
  }

  const products = await getProducts(searchParams.toString())
  if (products.items.total === 0) {
    return <Empty />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductTable slug={slug} products={products.results} />
        </Suspense>
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
    </Card>
  )
}
