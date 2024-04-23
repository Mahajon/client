"use client"

import { useEffect, useState } from "react"
import { redirect, useParams } from "next/navigation"
import { PlusCircle } from "lucide-react"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from "sonner"

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
import { CreateButton } from "@/components/form/buttons"
import { LoadingSpinner } from "@/components/icons"

export default function CreateNewcategory() {
  const params = useParams()
  const shopSlug = params.slug as string
  const [slug, setSlug] = useState("")
  const { pending } = useFormStatus()
  const [state, handleSubmit] = useFormState(createCategory, null)

  const handleSlugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //convert the name to a slug
    setSlug(
      event.target.value
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "")
    )
  }

  useEffect(() => {
    if (state?.status === 201) {
      toast("Success", {
        description: "Category created successfully",
      })
      redirect(`/dashboard/${shopSlug}/products/categories/${state.data.id}`)
    } else if (state != null) {
      const errorId = document.getElementById("error")
      if (errorId) {
        errorId.innerText = state?.error
        setTimeout(() => {
          errorId.innerText = ""
        }, 3000)
      }
    }
  }, [state])

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
        <form action={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Category</AlertDialogTitle>
            <input type="hidden" name="shop" value={shopSlug} />
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
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <Button type="submit" disabled={pending}>
              {pending ? <LoadingSpinner /> : "Create"}
            </Button> */}
            <CreateButton />
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
