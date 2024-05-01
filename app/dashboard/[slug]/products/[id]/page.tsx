import { getProduct, updateProduct } from "@/lib/actions/product"
import { Button } from "@/components/ui/button"

import ProductForm from "./form"

export default async function ProductDetail({
  params,
}: {
  params: { slug: string; id: number }
}) {
  const product = await getProduct(params.slug, params.id)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:p-4 md:p-8 lg:px-16 lg:py-8 xl:px-24 ">
        <ProductForm product={product} slug={params.slug} />
      </div>
    </div>
  )
}
