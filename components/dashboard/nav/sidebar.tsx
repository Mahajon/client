"use client"

import { count } from "console"
import path from "path"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegments } from "next/navigation"
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
  Sun,
  SunSnow,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { SiteConfig, siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const DashboardSidebar = () => {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()
  console.log(pathname, segments)
  let URLs = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <Home className="h-4 w-4" />,
      count: 0,
    },
  ]

  if (segments.length > 0) {
    URLs = [
      ...URLs,
      {
        name: "Products",
        url: `/dashboard/${segments[0]}/products`,
        icon: <Package2 className="h-4 w-4" />,
        count: 0,
      },
      {
        name: "Orders",
        url: `/dashboard/${segments[0]}/orders`,
        icon: <ShoppingCart className="h-4 w-4" />,
        count: 0,
      },
      {
        name: "Customers",
        url: `/dashboard/${segments[0]}/customers`,
        icon: <Users className="h-4 w-4" />,
        count: 0,
      },
      {
        name: "Settings",
        url: `/dashboard/${segments[0]}/settings`,
        icon: <Settings className="h-4 w-4" />,
        count: 0,
      },
    ]
  }

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Package2 className="h-6 w-6" />
            <span className="">{siteConfig.name}</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {URLs.map((url) => (
              <Link
                key={url.url}
                href={url.url}
                className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary hover:bg-secondary ${
                  url.url != "/dashboard" && pathname.startsWith(url.url)
                    ? "bg-slate-600 text-white"
                    : "text-muted-foreground"
                }`}
              >
                {url.icon}
                {url.name}
                {url.count > 0 && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {url.count}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar
