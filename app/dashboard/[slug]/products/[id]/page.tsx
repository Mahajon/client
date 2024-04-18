import { getProduct, updateProduct } from "@/lib/actions/product"
import { Button } from "@/components/ui/button"
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
  const product = await getProduct(params.id)
  const updateProductWithSlug = updateProduct.bind(null, params.slug)
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <form
          className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"
          action={updateProductWithSlug}
        >
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <TitleSection name={product.name} status={product.status} />
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <DetailSection
                  name={product.name}
                  description={product.description}
                />
                <StockSection variants={product.variants} />
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <StatusSection status={product.status} />
                <CategorySection
                  category={product.category}
                  subcategory={product.subcategory}
                />
                <ImageSection images={product.images} />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
