import DashboardNav from "@/components/dashboard/nav"
import { getShopList } from "@/components/dashboard/shop/actions"
import NewShop from "@/components/dashboard/shop/new"

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: RootLayoutProps) {
  const shops = await getShopList()
  console.log(shops)
  if (shops.length > 0) {
    return <DashboardNav>{children}</DashboardNav>
  }
  return <NewShop />
}
