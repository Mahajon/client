import { getProducts } from "@/lib/actions/product"

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

  const products = await getProducts(searchParams.toString())
  if (products.items.total === 0) {
    return <Empty />
  }

  return (
    <div className="">
      <div className="my-4">
        <ProductTable slug={slug} products={products.results} />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          Showing {products.items.start} to {products.items.end} of{" "}
          {products.items.total} products
        </div>
        <div>
          <PaginationComponent total={products.pages.total} />
        </div>
      </div>
    </div>
  )
}
