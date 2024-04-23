"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFormState } from "react-dom"
import { toast } from "sonner"

export default function Form({
  action,
  children,
}: {
  action: (
    prevState: any,
    formData: FormData,
    id?: any,
    slug?: any
  ) => Promise<any>
  children: React.ReactNode
}) {
  const [state, handleSubmit] = useFormState(action, null)
  const router = useRouter()
  useEffect(() => {
    if (state?.status === 200 || state?.status === 201) {
      toast("Success", {
        description: state?.message,
      })
      const closeButton = document.getElementById("AlertDialogCloseButton")
      closeButton?.click()
      if (state?.redirect) router.push(state.redirect)
      else router.refresh()
    } else if (state != null) {
      const errorId = document.getElementById("error")
      if (errorId) {
        errorId.innerText = state?.message
        setTimeout(() => {
          errorId.innerText = ""
        }, 3000)
      }
    }
  }, [state])
  return <form action={handleSubmit}>{children}</form>
}
