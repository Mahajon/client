import { Suspense } from "react"

import ProductTable from "@/components/dashboard/products/list"
import { OrderingSelector } from "@/components/dashboard/products/list/ordering"
import Search from "@/components/dashboard/products/list/search"
import CreateNewProduct from "@/components/dashboard/products/new"

export default async function ProductsIndex({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: {
    search: string
    page: number
    ordering: string
  }
}) {
  return (
    <div className="p-4 m-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-cal">Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search products..." />
        <OrderingSelector />
        <CreateNewProduct />
      </div>

      <Suspense
        key={searchParams.search || "" + searchParams.page || 1}
        fallback="Loading"
      >
        <ProductTable slug={params.slug} params={searchParams} />
      </Suspense>
    </div>
  )
}
