import Image from "next/image"
import Link from "next/link"
import { SquareArrowOutUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ShopCard(shopObj: any) {
  const shop = shopObj.shop
  return (
    <Card className="hover:shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          alt={shop.name}
          className="aspect-square rounded object-cover"
          height="56"
          src={shop.logo ? shop.logo : "/placeholder.svg"}
          width="56"
        />
        <div className="grid gap-1">
          <CardTitle>{shop.name}</CardTitle>
          <CardDescription>
            <a
              href={`http://${shop.slug}${process.env.NEXT_PUBLIC_SHOP_ROOT_DOMAIN}`}
              target="_blank"
              rel="noreferrer"
            >
              <Badge variant="outline" className="flex items-center gap-2">
                <SquareArrowOutUpRight className="size-4" />
                {`${shop.slug}${process.env.NEXT_PUBLIC_SHOP_ROOT_DOMAIN}`}
              </Badge>
            </a>
          </CardDescription>
        </div>
        <Button className="ml-auto" size="icon" variant="ghost">
          <MoreHorizontalIcon className="size-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2 border-t py-2">
        <div className="flex gap-2 py-4">
          <Link href={`/dashboard/${shop.slug}`}>
            <Button size="sm">Open Shop</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MoreHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
