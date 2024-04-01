import { getShopDetails } from "@/lib/actions/shop"
import { Button } from "@/components/ui/button"

export default async function ShopHome({
  params,
}: {
  params: { slug: string }
}) {
  const shop: any = await getShopDetails(params.slug)

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="font-cal text-lg md:text-2xl">{shop.name} Overview</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-cal">You have no products</h3>
          <p className="text-sm text-geist-900">
            You can start selling as soon as you add a product.
          </p>
          <Button className="mt-4">Add Product</Button>
        </div>
      </div>
    </main>
  )
}
