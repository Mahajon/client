import { Suspense } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import CreateNewcategory from "../new"
import CategoryTable from "./table"

export default function CategoryList({
  categories,
  activeId,
}: {
  categories: any[]
  activeId: string
}) {
  console.log("activeId", activeId)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Categories</CardTitle>
          <CreateNewcategory />
        </div>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryTable activeId={activeId} categories={categories} />
        </Suspense>
      </CardContent>
      <CardFooter className="w-full flex items-center md:items-end justify-between">
        <div className="w-full text-xs text-muted-foreground">
          Showing <strong>{categories.length}</strong> categories
        </div>
      </CardFooter>
    </Card>
  )
}
