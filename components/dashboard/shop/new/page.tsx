"use client"

import { error } from "console"
import { FormEvent, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle, CircleX, LoaderCircle } from "lucide-react"
import { toast } from "sonner"
import { useDebouncedCallback } from "use-debounce"

import { checkShopSlug, submitShopForm } from "@/lib/actions/shop"
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
  const [slugIsOkay, setSlugIsOkay] = useState("")
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
    if (data.error) {
      toast.error("Error creating shop. Please try again.")
    } else {
      toast.success("Shop created successfully")
      router.refresh()
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

  const checkSlug = useDebouncedCallback(async (slug) => {
    setSlugIsOkay("checking")
    const res = await checkShopSlug(slug)
    if (res.status === 404) {
      setSlugIsOkay("ok")
    } else {
      setSlugIsOkay("error")
    }
  }, 300)

  return (
    <Card className="min-w-2xl mx-auto">
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
                Shop Name<span className="ml-1 font-cal text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Mahajon"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">
                Shop Slug<span className="ml-1 font-cal text-red-500">*</span>
              </Label>

              <div className="mt-1 flex rounded-md relative">
                <Input
                  type="text"
                  name="slug"
                  id="slug"
                  className="block w-full min-w-0 flex-1 rounded-md px-3 py-2  sm:text-sm "
                  placeholder="shopname"
                  onChange={(e) => checkSlug(e.target.value)}
                />
                <span className="absolute right-0 top-0 h-full z-10  inline-flex items-center rounded-r-md border border-l-1 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  .mahajon.shop
                </span>
              </div>
              <div>
                {slugIsOkay === "checking" && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <LoaderCircle className="animate-spin h-4 w-4 mr-2 inline-block" />
                    Checking slug...
                  </span>
                )}
                {slugIsOkay === "ok" && (
                  <span className="text-xs text-green-500 dark:text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2 inline-block" />
                    Slug is available
                  </span>
                )}
                {slugIsOkay === "error" && (
                  <span className="text-xs text-red-500 dark:text-red-400">
                    <CircleX className="h-4 w-4 mr-2 inline-block" />
                    Slug is not available
                  </span>
                )}
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
                  className="aspect-square overflow-hidden relative flex aspect-square h-full max-h-20 flex-col items-center justify-center"
                >
                  <img
                    src="https://placehold.co/100"
                    className="object-cover"
                    alt="Shop Logo"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={slugIsOkay != "ok"}
            >
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
