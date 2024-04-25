import { Suspense } from "react"

// import { getProducts } from "@/lib/actions/product"
import { getToken } from "@/lib/user"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import ExportDialog from "@/components/dashboard/products/list/export"
import { StatusFilter } from "@/components/dashboard/products/list/filter"
import PaginationComponent from "@/components/dashboard/products/list/pagination"
import CreateNewProduct from "@/components/dashboard/products/new"

import { OrderingSelector } from "./ordering"
import Search from "./search"
import ProductTable from "./table"

// async function getProducts(shopSlug: string, params: string) {
//   let data: any
//   const token = await getToken()
//   const response = await fetch(
//     `${process.env.API_BASE_URL}products/?${params}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Shop: shopSlug,
//       },
//     }
//   )
//   if (!response.ok) {
//     throw new Error("Failed to fetch products")
//   }
//   data = await response.json()
//   return data
// }

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: {
    search?: string
    page?: number
    ordering?: string
    status?: string
  }
}) {
  // let sParams = new URLSearchParams({
  //   page: searchParams?.page?.toString() || "1",
  // })

  // if (searchParams?.search) {
  //   sParams.append("search", searchParams.search)
  // }

  // if (searchParams?.ordering) {
  //   sParams.append("ordering", searchParams.ordering)
  // }

  // if (searchParams?.status) {
  //   sParams.append("status", searchParams.status)
  // }

  // const products = await getProducts(params.slug, sParams.toString())

  return (
    <main className=" grid items-start gap-4 p-4 sm:p-6 md:gap-8">
      <div className="flex items-center justify-between gap-2">
        <Search placeholder="Search products..." />
        <OrderingSelector searchParams={searchParams} />

        <StatusFilter searchParams={searchParams} />
        <div className="ml-auto flex items-center gap-2">
          <ExportDialog />

          <CreateNewProduct />
        </div>
      </div>

      {/* <ProductTable slug={params.slug} params={searchParams} /> */}
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>

        <Suspense
          fallback={
            <div className="border p-4 flex flex-col gap-2 bg-secondary">
              <Skeleton className="w-32 h-12" />
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
            </div>
          }
        >
          <ProductTable slug={params.slug} searchParams={searchParams} />
        </Suspense>
      </Card>
    </main>
  )
}
