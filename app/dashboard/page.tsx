import { redirect } from "next/navigation"

import { getShopList } from "@/lib/actions/shop"
import ShopCard from "@/components/dashboard/home/card"
import { DashboardHomeNavigation } from "@/components/navigation/dashboard/home"

export default async function DashboardHome() {
  const shops = await getShopList()
  if (shops.length === 1) {
    redirect(`/dashboard/${shops[0].slug}`)
  }
  if (shops.length > 1) {
    return (
      <div className=" min-h-screen bg-gray-50 ">
        <DashboardHomeNavigation>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="w-full max-w-7xl mx-auto flex items-center py-4">
              <h1 className="text-lg font-semibold md:text-2xl lg:text-3xl">
                My Shops
              </h1>
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {shops.map((shop: any) => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </div>
          </main>
        </DashboardHomeNavigation>
      </div>
    )
  }
  return redirect("/")
}
