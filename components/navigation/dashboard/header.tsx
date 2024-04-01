import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import UserNavigation from "@/components/navigation/user"

import Notification from "./notification"
import SearchForm from "./search"

export default function DashboardHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-bg px-4 lg:h-[60px] lg:px-6">
      <div className="w-full flex-1">
        <SearchForm />
      </div>
      <div className="flex items-center justify-between gap-x-3">
        <Notification />
        <UserNavigation />
      </div>
    </header>
  )
}
