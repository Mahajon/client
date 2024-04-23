import { getProduct, updateProduct } from "@/lib/actions/product"
import { Button } from "@/components/ui/button"
import ProductForm from "@/components/dashboard/products/detail"
import CategorySection from "@/components/dashboard/products/detail/category"
import DetailSection from "@/components/dashboard/products/detail/details"
import ImageSection from "@/components/dashboard/products/detail/images"
import StatusSection from "@/components/dashboard/products/detail/status"
import StockSection from "@/components/dashboard/products/detail/stock"
import TitleSection from "@/components/dashboard/products/detail/title"

export default async function ProductDetail({
  params,
}: {
  params: { slug: string; id: number }
}) {
  const product = await getProduct(params.slug, params.id)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <ProductForm product={product} slug={params.slug} />
      </div>
    </div>
  )
}
