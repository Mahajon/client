"use client"

import { PlusCircle, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function StockSection({ variants }: { variants: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SKU</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Buying Price</TableHead>
              <TableHead>Selling Price</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody id="varianttable-body">
            {variants.map((variant, id) => (
              <TableRow key={id} id={`${id}`}>
                <TableCell className="font-cal">GGPC-001</TableCell>
                <TableCell>
                  <Label htmlFor={`name-${id}`} className="sr-only">
                    Name
                  </Label>

                  <Input
                    id={`name-${id}`}
                    name="name"
                    type="text"
                    defaultValue={variant.name}
                  />
                </TableCell>
                <TableCell>
                  <Label htmlFor={`stock-${id}`} className="sr-only">
                    Stock
                  </Label>
                  <Input
                    id={`stock-${id}`}
                    type="number"
                    name="stock"
                    defaultValue={variant.stock}
                  />
                </TableCell>
                <TableCell>
                  <Label htmlFor={`buyprice-${id}`} className="sr-only">
                    Price
                  </Label>
                  <Input
                    id={`buyprice-${id}`}
                    type="number"
                    defaultValue={variant.price}
                  />
                </TableCell>
                <TableCell>
                  <Label htmlFor={`price-${id}`} className="sr-only">
                    Price
                  </Label>
                  <Input
                    id={`price-${id}`}
                    type="number"
                    defaultValue={variant.price}
                  />
                </TableCell>

                <TableCell>
                  <DeleteRow rowId={id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <AddVariant />
      </CardFooter>
    </Card>
  )
}

function AddVariant() {
  const addVariant = () => {
    const TableBody = document.getElementById("varianttable-body")
    // Create a new row using the last row as a template
    const lastRow = TableBody?.lastElementChild
    const newRow = lastRow?.cloneNode(true) as HTMLTableRowElement
    const id = TableBody?.childElementCount || 0
    console.log(newRow)
    // Clear the input values
    if (newRow) {
      newRow.querySelectorAll("input").forEach((input) => (input.value = ""))
      // count total rows and set id
      newRow.id = id.toString()
    }
    // Append the new row to the table body
    if (TableBody) TableBody.appendChild(newRow)
  }
  return (
    <Button
      size="sm"
      variant="ghost"
      className="gap-1"
      type="button"
      onClick={addVariant}
    >
      <PlusCircle className="size-3.5" />
      Add Variant
    </Button>
  )
}

function DeleteRow({ rowId }: { rowId: number }) {
  const deleteRow = () => {
    console.log("Delete row")
    const TableBody = document.getElementById("varianttable-body")
    console.log(rowId)
    const row = document.getElementById(rowId.toString())
    console.log(row)
    if (row && TableBody) TableBody.removeChild(row)
  }
  return (
    <Button
      size="sm"
      variant="ghost"
      className="gap-1"
      type="button"
      onClick={deleteRow}
    >
      <XCircle className="size-3.5" />
    </Button>
  )
}
