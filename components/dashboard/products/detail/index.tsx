"use client"

import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "sonner"

import { updateProduct } from "@/lib/actions/product"
import { Button } from "@/components/ui/button"
import CategorySection from "@/components/dashboard/products/detail/category"
import DetailSection from "@/components/dashboard/products/detail/details"
import ImageSection from "@/components/dashboard/products/detail/images"
import StatusSection from "@/components/dashboard/products/detail/status"
import StockSection from "@/components/dashboard/products/detail/stock"
import TitleSection from "@/components/dashboard/products/detail/title"

export default function ProductForm({
  product,
  slug,
}: {
  product: any
  slug: string
}) {
  const updateProductWithSlug = updateProduct.bind(null, slug)
  const [state, submitForm] = useFormState(updateProductWithSlug, null)
  useEffect(() => {
    if (state?.status === 200) {
      toast("Success", {
        description: "Product updated successfully",
      })
    } else if (state != null) {
      toast("Failed to update product", {
        description: "Error: " + state?.error,
      })
    }
  }, [state])
  return (
    <form
      className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"
      action={submitForm}
    >
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
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
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </div>
    </form>
  )
}
