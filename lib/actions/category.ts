"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { getToken } from "../user"

export const createCategory = async (prevState: any, formData: FormData) => {
  const token = await getToken()
  console.log(formData)
  let response
  try {
    response = await fetch(`${process.env.API_BASE_URL}categories/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 201) {
    const data = await response.json()
    return { data, status: 201 }
  }
  const error = await response.json()
  console.log(error)
  return { error: "Internal server error", status: 500 }
}
