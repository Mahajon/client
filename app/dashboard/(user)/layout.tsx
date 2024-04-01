import Link from "next/link"
import { Package2 } from "lucide-react"

import NotificationDropdown from "@/components/navigation/dashboard/notification"
import Logo from "@/components/navigation/logo"
import UserNavigation from "@/components/navigation/user"

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
]

export default function DashboardHomeNavigation({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" min-h-screen w-full ">
      <div className="flex flex-col">
        <header className="w-full flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="flex items-center gap-x-8">
            <div className="w-full flex-1">
              <Link
                href="/dashboard"
                className="flex items-center justify-start gap-x-2 font-cal"
              >
                <Package2 className="" />
                <span className="font-cal ">Dokan</span>
              </Link>
            </div>
            <div className="flex items-center justify-start gap-x-2">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-geist-900 hover:bg-geist-200 hover:text-geist-1000 active:bg-geist-200 px-4 py-2 text-sm rounded-xl"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <NotificationDropdown />
            <UserNavigation />
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}
