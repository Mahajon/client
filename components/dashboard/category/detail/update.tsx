"use client"

import { useEffect, useState } from "react"
import { revalidatePath } from "next/cache"
import { redirect, useParams } from "next/navigation"
import { Pen } from "lucide-react"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from "sonner"

import { updateCategory } from "@/lib/actions/category"
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
import { UpdateButton } from "@/components/form/buttons"
import { LoadingSpinner } from "@/components/icons"

export default function CategoryUpdateForm({ data }: { data: any }) {
  const params = useParams()
  const shopSlug = params.slug as string
  const [slug, setSlug] = useState(data.slug)
  // const { pending } = useFormStatus()
  // const [state, handleSubmit] = useFormState(updateCategory, null)
  const updateCategoryWithSlug = updateCategory.bind(null, shopSlug)

  const handleSlugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //convert the name to a slug
    setSlug(
      event.target.value
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "")
    )
  }

  // useEffect(() => {
  //   if (state?.status === 200) {
  //     toast("Success", {
  //       description: "Category updated successfully",
  //     })
  //     const closeButton = document.getElementById("updateFormClose")
  //     if (closeButton) closeButton.click()
  //   } else if (state != null) {
  //     const errorId = document.getElementById("error")
  //     if (errorId) {
  //       errorId.innerText = state?.error
  //       setTimeout(() => {
  //         errorId.innerText = ""
  //       }, 3000)
  //     }
  //   }
  // }, [state])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <Pen className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Update
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* <form action={handleSubmit}> */}
        <Form action={updateCategoryWithSlug}>
          {" "}
          <AlertDialogHeader>
            <AlertDialogTitle>Update {data.name}</AlertDialogTitle>
            <input type="hidden" name="id" value={data.id} />
            {/* <input type="hidden" name="shop" value={shopSlug} /> */}

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
                  defaultValue={data.name}
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
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>
              <div id="error" className="font-cal text-xs text-red-700"></div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel id="updateFormClose" className="h-8">
              Cancel
            </AlertDialogCancel>
            <UpdateButton />
          </AlertDialogFooter>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
