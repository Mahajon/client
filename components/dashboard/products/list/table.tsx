import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ActionButton from "@/components/dashboard/products/list/tableAction"

export default function ProductTable({
  slug,
  products,
}: {
  slug: string
  products: any[]
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[20px] sm:table-cell">ID</TableHead>
          <TableHead className="hidden w-[20px] sm:table-cell">Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Price</TableHead>
          <TableHead className="hidden md:table-cell">Total Sales</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="hidden md:table-cell">{product.id}</TableCell>
            <TableCell className="hidden sm:table-cell">
              <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="36"
                src="/placeholder.svg"
                width="36"
              />
            </TableCell>
            <TableCell className="font-medium">
              <Link href={`/dashboard/${slug}/products/${product.id}`}>
                {product.name}
              </Link>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{product.status}</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {product.price}
            </TableCell>
            <TableCell className="hidden md:table-cell">25</TableCell>
            <TableCell className="hidden md:table-cell">
              {new Date(product.created_at).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </TableCell>
            <TableCell>
              <ActionButton slug={slug} id={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
