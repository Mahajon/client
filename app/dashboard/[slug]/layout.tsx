import { redirect } from "next/navigation"

import { getShopList } from "@/lib/actions/shop"
import NewShop from "@/components/dashboard/shop/new"
import DashboardNav from "@/components/navigation/dashboard"

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: RootLayoutProps) {
  // const shops = await getShopList()

  // if (shops.length > 0) {
  return <DashboardNav>{children}</DashboardNav>
  // }
  // return redirect("/dashboard")
}
