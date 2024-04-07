import { getProducts } from "@/lib/actions/product"
import ProductListPage from "@/components/dashboard/products/list"

export default async function ProductsIndex({
  params,
}: {
  params: { slug: string }
}) {
  const products = await getProducts(params.slug)
  return <ProductListPage products={products} />
}
