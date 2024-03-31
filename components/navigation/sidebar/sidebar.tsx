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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ShopSelect from "@/components/navigation/dashboard/shopSelect"

import Logo from "../logo"

const Sidebar = () => {
  const pathname = usePathname()
  const segments = useSelectedLayoutSegments()
  console.log(pathname, segments)
  let URLs = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <Home className="size-4" />,
      count: 0,
    },

    {
      name: "Products",
      url: `/dashboard/${segments[0]}/products`,
      icon: <Package2 className="size-4" />,
      count: 0,
    },
    {
      name: "Orders",
      url: `/dashboard/${segments[0]}/orders`,
      icon: <ShoppingCart className="size-4" />,
      count: 0,
    },
    {
      name: "Customers",
      url: `/dashboard/${segments[0]}/customers`,
      icon: <Users className="size-4" />,
      count: 0,
    },
    {
      name: "Settings",
      url: `/dashboard/${segments[0]}/settings`,
      icon: <Settings className="size-4" />,
      count: 0,
    },
  ]

  // if (pathname === "/dashboard") {
  //   return null
  // }

  return (
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
            <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
              {url.count}
            </Badge>
          )}
        </Link>
      ))}
    </nav>
  )
}

export default Sidebar
