import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Badge } from "../ui/badge"

// import { Logo } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        {/* <Logo className="size-6" /> */}
        <span className="inline-block font-cal">{siteConfig.name}</span>
        {process.env.NEXT_PUBLIC_VERCEL_ENV != "production" && (
          <Badge className="">Beta</Badge>
        )}
      </Link>
    </div>
  )
}
