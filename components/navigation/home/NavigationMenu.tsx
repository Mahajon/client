"use client"

import * as React from "react"
import Link from "next/link"
import {
  BookOpen,
  Building2,
  MousePointerClick,
  Package,
  PenTool,
  Recycle,
  ScanBarcode,
  TrendingUp,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const features: {
  title: string
  href: string
  description: string
  icon: React.ReactNode
}[] = [
  {
    title: "Inventory Management",
    href: "/features/inventory-management",
    description:
      "Manage your inventory with ease. Keep track of your products.",
    icon: <Package className="size-5" />,
  },
  {
    title: "One-Click E-commerce Builder",
    href: "/features/ecommerce-builder",
    description: "Build your online store in minutes. No coding required.",
    icon: <MousePointerClick className="size-5" />,
  },
  {
    title: "Analytics",
    href: "/features/analytics",
    description: "Get insights into your business with our analytics tools.",
    icon: <TrendingUp className="size-5" />,
  },
  {
    title: "Point Of Sale",
    href: "/about",
    description: "Read more about us and our goals.",
    icon: <ScanBarcode className="size-5" />,
  },
]

const resources: {
  title: string
  href: string
  description: string
  icon: React.ReactNode
}[] = [
  {
    title: "Blog",
    href: "/blog",
    description:
      "For sighted users to preview content available behind a link.",
    icon: <PenTool className="size-5" />,
  },
  {
    title: "Guides",
    href: "/guides",
    description: "Learn how to use our platform and get the most out of it.",
    icon: <BookOpen className="size-5" />,
  },
  {
    title: "Changelog",
    href: "/changelog",
    description: "See how we have evolved over time.",
    icon: <Recycle className="size-5" />,
  },
  {
    title: "About",
    href: "/about",
    description: "Read more about us and our goals.",
    icon: <Building2 className="size-5" />,
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-geist-100/50 to-geist-100 flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Logo className="size-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foregound text-sm leading-tight">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {features.map((feature) => (
                <IconListItem
                  key={feature.title}
                  title={feature.title}
                  href={feature.href}
                  icon={feature.icon}
                >
                  {feature.description}
                </IconListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources.map((component) => (
                <IconListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </IconListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-muted-foreground focus:bg-muted focus:text-muted-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foregound line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const IconListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none items-center gap-x-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-muted-foreground focus:bg-muted focus:text-muted-foreground",
            className
          )}
          {...props}
        >
          <div className="text-muted-foregound">{icon}</div>
          <div className="flex flex-col gap-y-2">
            <div className="text-sm font-medium leading-none text-foreground">
              {title}
            </div>
            <p className="text-muted-foregound line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

IconListItem.displayName = "IconListItem"