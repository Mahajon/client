"use client"

import { useRouter } from "next/navigation"

import { updateProduct } from "@/lib/actions/product"
import { Button } from "@/components/ui/button"
import Form from "@/components/form"

import CategorySection from "./category"
import DetailSection from "./details"
import ImageSection from "./images"
import StatusSection from "./status"
import StockSection from "./stock"
import TitleSection from "./title"

export default function ProductForm({
  product,
  slug,
}: {
  product: any
  slug: string
}) {
  const router = useRouter()
  const updateProductWithShop = updateProduct.bind(null, slug)

  return (
    <Form action={updateProductWithShop}>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid flex-1 auto-rows-max gap-4">
          <input type="hidden" name="id" value={product.id} />
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
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                router.refresh()
              }}
            >
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </div>
      </div>
    </Form>
  )
}
