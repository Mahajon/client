"use client"

import Link from "next/link"

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
  return (
    <Card className="mx-auto min-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">Create Your Shop</CardTitle>
        <CardDescription>
          Enter your shop details to complete your signup.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Shop Name</Label>
            <Input id="name" type="text" placeholder="Dokan" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>

            <Textarea
              id="description"
              name="description"
              placeholder="A platform for selling products"
            ></Textarea>
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
      </CardContent>
    </Card>
  )
}
