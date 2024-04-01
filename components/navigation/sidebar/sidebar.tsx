"use client"

import { count } from "console"
import path from "path"
import Link from "next/link"
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation"
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
  const { slug } = useParams()
  const segments = useSelectedLayoutSegments()
  console.log(pathname, segments)
  let URLs = [
    {
      name: "Overview",
      url: `/dashboard/${slug}`,
      icon: <Home className="size-4" />,
      count: 0,
    },
    {
      name: "Products",
      url: `/dashboard/${slug}/products`,
      icon: <Package2 className="size-4" />,
      count: 0,
    },
    {
      name: "Orders",
      url: `/dashboard/${slug}/orders`,
      icon: <ShoppingCart className="size-4" />,
      count: 0,
    },
    {
      name: "Customers",
      url: `/dashboard/${slug}/customers`,
      icon: <Users className="size-4" />,
      count: 0,
    },
    {
      name: "Settings",
      url: `/dashboard/${slug}/settings`,
      icon: <Settings className="size-4" />,
      count: 0,
    },
  ]

  // if (pathname === "/dashboard") {
  //   return null
  // }

  return (
    <nav className="grid gap-y-1 items-start px-2 text-sm font-medium lg:px-4">
      {URLs.map((url) => (
        <Link
          key={url.url}
          href={url.url}
          className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all  
          ${
            url.url == `/dashboard/${slug}` && pathname == url.url
              ? "bg-geist-300 text-geist-1000"
              : url.url != `/dashboard/${slug}` && pathname.startsWith(url.url)
              ? "bg-geist-300 text-geist-1000"
              : "text-primary hover:bg-geist-200  hover:text-geist-1000"
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
