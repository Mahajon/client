import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import UserNavigation from "@/components/navigation/user"

import Notification from "./notification"
import Subnav from "./subnav"

export default function DashboardHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-bg px-4 lg:h-[60px] lg:px-6">
      <div className="size-full flex-1">
        <Subnav />
      </div>
      <div className="flex items-center justify-between gap-x-3">
        <Notification />
        <UserNavigation />
      </div>
    </header>
  )
}
