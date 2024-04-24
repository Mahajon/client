"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { PlusCircle } from "lucide-react"

import { createCategory } from "@/lib/actions/category"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Form from "@/components/form"
import { CreateButton } from "@/components/form/buttons"

export default function CreateNewcategory() {
  const params = useParams()
  const [slug, setSlug] = useState("")
  const createCategoryWithShop = createCategory.bind(
    null,
    params.slug as string
  )

  const handleSlugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //convert the name to a slug
    setSlug(
      event.target.value
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "")
    )
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Category
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Form action={createCategoryWithShop}>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Category</AlertDialogTitle>
            <input type="hidden" name="shop" value={params.slug} />
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full"
                  placeholder="Category Name"
                  onChange={handleSlugChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  type="text"
                  className="w-full"
                  placeholder="category-slug"
                  value={slug}
                />
              </div>
              <div id="error" className="font-cal text-xs text-red-700"></div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="h-8">Cancel</AlertDialogCancel>
            <CreateButton />
          </AlertDialogFooter>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
