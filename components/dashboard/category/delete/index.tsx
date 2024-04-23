"use client"

import { useParams } from "next/navigation"
import { Trash } from "lucide-react"

import { deleteCategory } from "@/lib/actions/category"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Form from "@/components/form"

import CategoryDeleteForm from "./form"

export default function CategoryDeleteDialog({
  data,
  iconOnly = false,
}: {
  data: any
  iconOnly?: boolean
}) {
  const params = useParams()
  const shopSlug = params.slug as string
  const deleteCategoryWithShop = deleteCategory.bind(null, shopSlug)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {iconOnly ? (
          <Button
            size="sm"
            className="h-8 gap-1 text-secondary-foreground"
            variant="outline"
          >
            <Trash className="h-3.5 w-3.5" />
          </Button>
        ) : (
          <Button size="sm" className="h-8 gap-1" variant="destructive">
            <Trash className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Delete
            </span>
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Form action={deleteCategoryWithShop}>
          <CategoryDeleteForm data={data} />
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
