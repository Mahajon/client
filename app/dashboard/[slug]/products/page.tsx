import { Suspense } from "react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import CreateNewProduct from "@/components/dashboard/products/new"

import ExportDialog from "./export"
import { OrderFilter, StatusFilter } from "./filter"
import Search from "./search"
import ProductTable from "./table"

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
  return (
    <main className=" grid items-start gap-4 p-4 sm:p-6 md:gap-8">
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10 gap-2">
        <Search className="col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-6" />
        <OrderFilter searchParams={searchParams} />
        <StatusFilter searchParams={searchParams} />
        <ExportDialog />
        <CreateNewProduct />
      </div>

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
