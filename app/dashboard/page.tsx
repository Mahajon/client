import { Button } from "@/components/ui/button"
import ShopCard from "@/components/dashboard/home/card"
import { getShopList } from "@/components/dashboard/shop/actions"

export default async function DashboardHome() {
  const shops = await getShopList()
  if (shops.length > 0) {
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">My Shops</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {shops.map((shop: any) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </main>
    )
  }
}
