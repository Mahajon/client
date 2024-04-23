import { getShopDetails } from "@/lib/actions/shop"
import ShopHomePage from "@/components/dashboard/shop/home"

export default async function Dashboard({
  params,
}: {
  params: { slug: string }
}) {
  const shop: any = await getShopDetails(params.slug)
  return <ShopHomePage />
}
