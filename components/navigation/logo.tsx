import Link from "next/link"
import { Package2 } from "lucide-react"

import { siteConfig } from "@/config/site"

export default function Logo() {
  return (
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-bold">
        <Package2 className="size-5" />
        <span className="">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
