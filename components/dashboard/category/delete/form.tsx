"use client"

import { Trash } from "lucide-react"
import { useFormStatus } from "react-dom"

import {
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Delete } from "@/components/form/buttons"
import { LoadingSpinner } from "@/components/icons"

export default function CategoryDeleteForm({ data }: { data: any }) {
  const { pending } = useFormStatus()
  return (
    <div>
      <AlertDialogHeader className="mb-4">
        <AlertDialogTitle>Delete {data.name}</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete category <strong>{data.name}</strong>?
          All associated subcategories will be deleted.
          <input type="hidden" name="id" value={data.id} />
          <input type="hidden" name="shop" value={data.shop} />
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="h-8">Cancel</AlertDialogCancel>
        <Delete />
      </AlertDialogFooter>
    </div>
  )
}
