"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { BoxSelect, Check, ChevronsUpDown, Target } from "lucide-react"
import { useTheme } from "next-themes"

import { getShopList } from "@/lib/actions/shop"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import NewShopButton from "./newShopButton"

export default function Select({ shops }: { shops: any[] }) {
  //extract shop id and convert to number
  const params = useParams()
  const slug = params.slug as string
  const currentShop = shops.find((shop) => shop.slug === slug)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button
          variant="outline"
          className="w-full flex items-center justify-between px-2"
        >
          <div className="flex items-center justify-start mr-2">
            <Avatar className="rounded-full aspect-square p-2">
              {currentShop.logo ? (
                <AvatarImage src={currentShop.logo} alt={currentShop.name} />
              ) : (
                <AvatarFallback>
                  <BoxSelect className="size-6" />
                </AvatarFallback>
              )}
            </Avatar>
            <span className="">{currentShop.name}</span>
          </div>
          <ChevronsUpDown className="size-4" />
          <span className="sr-only">Toggle Shop</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Select Shop</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {shops.map((shop: any) => (
          <DropdownMenuItem
            key={shop.id}
            className={`py-0 ${
              slug === shop.slug ? "bg-secondary text-black" : ""
            }`}
          >
            <Link
              href={`/dashboard/${shop.slug}`}
              className="w-full flex items-center justify-start font-medium"
            >
              <div className="flex items-center justify-start mr-2">
                <Avatar className="rounded-full aspect-square p-2">
                  {currentShop.logo ? (
                    <AvatarImage
                      src={currentShop.logo}
                      alt={currentShop.name}
                    />
                  ) : (
                    <AvatarFallback>
                      <BoxSelect className="size-6" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <span className="">{currentShop.name}</span>
              </div>
              {slug === shop.slug && <Check className="size-4 ml-auto" />}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <NewShopButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
