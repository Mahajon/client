import { redirect } from "next/navigation"

import { getShopList } from "@/lib/actions/shop"
import ShopCard from "@/components/dashboard/home/card"
import NewShop from "@/components/dashboard/shop/new"
import SomethingWentWrong from "@/components/error/something-went-wrong"
import { DashboardHomeNavigation } from "@/components/navigation/dashboard/home"

export default async function DashboardHome() {
  const shops = await getShopList()
  if (shops.error) {
    return <SomethingWentWrong error={shops.error} />
  }
  if (shops.length === 1) {
    redirect(`/dashboard/${shops[0].slug}`)
  }
  if (shops.length > 1) {
    return (
      <div className=" min-h-screen bg-gray-50 ">
        <DashboardHomeNavigation>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="mx-auto flex w-full max-w-7xl items-center py-4">
              <h1 className="font-cal text-lg md:text-2xl lg:text-3xl">
                My Shops
              </h1>
            </div>

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {shops.map((shop: any) => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </div>
          </main>
        </DashboardHomeNavigation>
      </div>
    )
  }
  return <NewShop />
}
