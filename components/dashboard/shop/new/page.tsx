"use client"

import { FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { submitShopForm } from "@/lib/actions/shop"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewShopPage() {
  const router = useRouter()
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    formData.delete("logo")
    const logoURL = handleFileUpload(event)
    if (logoURL) {
      formData.append("logo", logoURL)
    }
    const data = await submitShopForm(formData)
    if (!data.error) {
      toast.success("Shop created successfully")
      router.refresh()
    } else {
      toast.error("Error creating shop")
    }
  }

  const handleFileUpload = (e: React.FormEvent<HTMLFormElement>) => {
    const url = null
    return url
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const preview = document.getElementById("logo-preview")
    if (!preview) return
    if (!e.target.files) return
    const file = e.target.files[0]
    if (file) {
      const filesize = file.size / 1024 / 1024
      if (filesize > 2) {
        toast("File size should be less than 2MB")
        // empty the input field
        const logo: any = document.getElementById("logo")
        if (logo) logo.value = null
        return
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = document.createElement("img")
        img.src = e.target?.result as string
        img.className = "size-full object-cover"
        preview.innerHTML = ""
        preview?.appendChild(img)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <Card className="mx-auto min-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">Create A Shop</CardTitle>
        <CardDescription>
          Enter your shop details to complete your signup.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">
                Shop Name<span className="font-bold text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Dokan"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">
                Shop Slug<span className="font-bold text-red-500 ml-1">*</span>
              </Label>

              <div className="mt-1 flex rounded-md">
                <Input
                  type="text"
                  name="slug"
                  id="slug"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md  sm:text-sm "
                  placeholder="shopname"
                />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  .dokan.app
                </span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>

              <Textarea
                id="description"
                name="description"
                placeholder="A platform for selling products"
              ></Textarea>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="logo">Logo</Label>
              <div className="flex items-start gap-x-4">
                <div>
                  <Input
                    id="logo"
                    type="file"
                    name="logo"
                    onChange={(e) => handleLogoChange(e)}
                    accept="image/*"
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    PNG or JPG up to 10MB
                  </span>
                </div>
                <div
                  id="logo-preview"
                  className="relative h-full max-h-20 aspect-square flex flex-col justify-center items-center"
                >
                  <img
                    src="https://placehold.co/100"
                    className="object-cover"
                    alt="Placeholder Logo"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Create Shop
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Want to sign out?{" "}
            <Link href="#" className="underline">
              Sign Out here.
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
