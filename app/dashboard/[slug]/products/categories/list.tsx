import { Suspense } from "react"
import { useParams, useRouter } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import CategoryDeleteDialog from "./delete"
import CreateNewcategory from "./new"

// import CategoryTable from "./table"

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

function CategoryTable({
  categories,
  activeId,
}: {
  categories: any[]
  activeId: string
}) {
  const router = useRouter()
  const params = useParams()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[20px] sm:table-cell">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Subcategories</TableHead>

          <TableHead className="hidden md:table-cell">Total Products</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow
            key={category.id}
            onClick={() =>
              router.push(
                `/dashboard/${params.slug}/products/categories/${category.id}`
              )
            }
            className={`cursor-pointer ${
              activeId == category.id &&
              "bg-accent text-accent-foreground hover:bg-accent"
            }`}
          >
            <TableCell className="hidden md:table-cell">
              {category.id}
            </TableCell>

            <TableCell className="font-medium">{category.name}</TableCell>
            <TableCell>
              {category.subcategories ? category.subcategories.length : 0}
            </TableCell>
            <TableCell className="hidden md:table-cell">25</TableCell>

            <TableCell>
              <CategoryDeleteDialog data={category} iconOnly={true} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
