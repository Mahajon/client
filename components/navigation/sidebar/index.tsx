import Link from "next/link"
import {
  Bell,
  Check,
  Cloud,
  CreditCard,
  Home,
  // Github,
  Keyboard,
  LifeBuoy,
  LineChart,
  LogOut,
  Mail,
  MessageSquare,
  Monitor,
  Moon,
  Package,
  Package2,
  Plus,
  PlusCircle,
  Settings,
  ShoppingCart,
  Slash,
  Sun,
  SunSnow,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { SiteConfig, siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ShopSelect from "@/components/navigation/dashboard/shopSelect"

import Logo from "../logo"
import Sidebar from "./sidebar"
import UpgradeCard from "./upgradeCard"

const DashboardSidebar = () => {
  return (
    <div className="relative hidden border-r bg-bg md:block">
      <div className="sticky top-0 flex h-full max-h-screen flex-col gap-2">
        <div className="flex items-center justify-between gap-x-3 px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-cal">
            <Package2 className="size-5" />
          </Link>
          <Slash className="h-4 text-gray-600" />
          <ShopSelect />
        </div>
        <div className="flex-1">
          <Sidebar />
        </div>
        <div className="mt-auto p-4">
          <UpgradeCard />
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar
