"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

import { createProduct } from "@/lib/actions/product"
import { getShopDetails } from "@/lib/actions/shop"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingSpinner } from "@/components/icons"

export default function CreateNewProduct() {
  const params = useParams()
  const [slug, setSlug] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSlugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //convert the name to a slug
    setSlug(
      event.target.value
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "")
    )
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const shop = await getShopDetails(params.slug as string)
    formData.append("shop", shop.id)
    const response = await createProduct(formData, params.slug as string)
    if (response.error) {
      console.error(response.error)
      const errorDiv = document.getElementById("error")
      if (errorDiv) errorDiv.innerText = response.error
      setLoading(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Create Product</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleFormSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Product</AlertDialogTitle>

            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full"
                  placeholder="Product Name"
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
                  placeholder="product-name"
                  value={slug}
                />
              </div>
              <div id="error" className="text-xs font-cal text-red-700"></div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <AlertDialogAction> */}
            <Button type="submit" disabled={loading}>
              {loading ? <LoadingSpinner /> : "Continue"}
            </Button>
            {/* </AlertDialogAction> */}
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
