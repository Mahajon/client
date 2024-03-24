import { getServerSession } from "next-auth"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import DashboardNav from "@/components/dashboard/nav"
import Header from "@/components/dashboard/nav/header"
import NewShop from "@/components/dashboard/shop/new"

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: RootLayoutProps) {
  const shop = false
  if (shop) {
    return <DashboardNav>{children}</DashboardNav>
  }
  return <NewShop />
}
