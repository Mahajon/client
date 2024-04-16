import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Github, Twitter } from "@/components/icons"

import { Badge } from "../../ui/badge"
import UserNavigation from "../user/index"
import { NavigationMenuDemo } from "./NavigationMenu"

export function MainNav() {
  return (
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <div className="flex items-center justify-start space-x-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Logo className="size-6" /> */}
            <span className="inline-block font-cal">{siteConfig.name}</span>
            {process.env.NEXT_PUBLIC_VERCEL_ENV != "production" && (
              <Badge className="bg-accent text-accent-foreground">Beta</Badge>
            )}
          </Link>
        </div>
        <NavigationMenuDemo />
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>

          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Twitter className="size-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>

          <UserNavigation />
        </nav>
      </div>
    </div>
  )
}
