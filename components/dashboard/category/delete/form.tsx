"use client"

import { useFormStatus } from "react-dom"

import {
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Delete } from "@/components/form/buttons"

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
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="h-8">Cancel</AlertDialogCancel>
        <Delete />
      </AlertDialogFooter>
    </div>
  )
}
