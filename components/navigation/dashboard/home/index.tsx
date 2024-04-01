import Link from "next/link"

import Logo from "@/components/navigation/logo"
import UserNavigation from "@/components/navigation/user"
import { Package2 } from "lucide-react"
import NotificationDropdown from "../notification"

export function DashboardHomeNavigation({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" min-h-screen w-full ">
      <div className="flex flex-col">
        <header className="w-full flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <Link href="/" className="flex items-center gap-2 font-cal">
              <Package2 className="size-5" />
            </Link>
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
