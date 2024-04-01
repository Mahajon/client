import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link href="#" className="flex items-center gap-2 text-lg font-cal">
            <Package2 className="size-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-geist-900 hover:text-foreground"
          >
            <Home className="size-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
          >
            <ShoppingCart className="size-5" />
            Orders
            <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge>
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-geist-900 hover:text-foreground"
          >
            <Package className="size-5" />
            Products
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-geist-900 hover:text-foreground"
          >
            <Users className="size-5" />
            Customers
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-geist-900 hover:text-foreground"
          >
            <LineChart className="size-5" />
            Analytics
          </Link>
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
