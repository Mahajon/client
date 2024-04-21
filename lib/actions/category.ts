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
    revalidatePath(`/dashboard/${data.shop}/products/categories/${data.id}`)
    return { data, status: 201 }
  }
  return { error: "Internal server error", status: 500 }
}

export const updateCategory = async (prevState: any, formData: FormData) => {
  const token = await getToken()
  const categoryId = formData.get("id")
  let response
  try {
    response = await fetch(
      `${process.env.API_BASE_URL}categories/${categoryId}/`,
      {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    const data = await response.json()
    revalidatePath(`/dashboard/${data.shop}/products/categories/${data.id}`)
    return { data, status: 200 }
  }
  return { error: "Internal server error", status: 500 }
}

export const deleteCategory = async (prevState: any, formData: FormData) => {
  const token = await getToken()
  const categoryId = formData.get("id")
  let response
  try {
    response = await fetch(
      `${process.env.API_BASE_URL}categories/${categoryId}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 204) {
    revalidatePath(`/dashboard/${formData.get("shop")}/products/categories`)
    return { status: 204 }
  }
  return { error: "Internal server error", status: 500 }
}

export const getCategoryList = async (shopSlug: string) => {
  const token = await getToken()
  let response
  try {
    response = await fetch(
      `${process.env.API_BASE_URL}categories/?shop=${shopSlug}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    const data = await response.json()
    return { data, status: 200 }
  }
  return { error: "Internal server error", status: 500 }
}

export const getCategoryDetail = async (id: number) => {
  const token = await getToken()
  let response
  try {
    response = await fetch(`${process.env.API_BASE_URL}categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    const data = await response.json()
    return { data, status: 200 }
  }
  return { error: "Internal server error", status: 500 }
}
