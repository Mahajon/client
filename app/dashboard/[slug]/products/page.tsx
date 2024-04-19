import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search as SearchIcon,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductTable from "@/components/dashboard/products/list"
import ExportDialog from "@/components/dashboard/products/list/export"
import { StatusFilter } from "@/components/dashboard/products/list/filter"
import { OrderingSelector } from "@/components/dashboard/products/list/ordering"
import Search from "@/components/dashboard/products/list/search"
import CreateNewProduct from "@/components/dashboard/products/new"

export default function Products({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: {
    search?: string
    page?: number
    ordering?: string
    status?: string
  }
}) {
  return (
    <main className=" grid items-start gap-4 p-4 sm:p-6 md:gap-8">
      <div className="flex items-center justify-between gap-2">
        <Search placeholder="Search products..." />
        <OrderingSelector searchParams={searchParams} />

        <StatusFilter searchParams={searchParams} />
        <div className="ml-auto flex items-center gap-2">
          <ExportDialog />

          <CreateNewProduct />
        </div>
      </div>

      <ProductTable slug={params.slug} params={searchParams} />
    </main>
  )
}
