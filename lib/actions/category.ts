"use server"

import { revalidatePath } from "next/cache"

import { getToken } from "../user"

export const createCategory = async (
  shopSlug: string,
  prevState: any,
  formData: FormData
) => {
  const token = await getToken()

  let response
  try {
    response = await fetch(`${process.env.API_BASE_URL}categories/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        Shop: shopSlug,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 201) {
    const data = await response.json()
    revalidatePath(`/dashboard/${shopSlug}/products/categories/${data.id}`)
    return {
      data,
      status: 201,
      message: `Category <strong>${data.name}</strong> created successfully.`,
      redirect: `/dashboard/${shopSlug}/products/categories/${data.id}`,
    }
  } else {
    return { message: "Something went wrong", status: 500 }
  }
}

export const updateCategory = async (
  shopSlug: string,
  prevState: any,
  formData: FormData
) => {
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
          Shop: shopSlug as string,
        },
      }
    )
  } catch (error: any) {
    return { message: error.message, status: 500 }
  }
  if (response.status === 200) {
    const data = await response.json()
    revalidatePath(`/dashboard/${shopSlug}/products/categories/${data.id}`)
    return {
      data,
      message: `Category <strong>${data.name}</strong> updated successfully.`,
      status: 200,
    }
  }
  return { message: "Internal server error", status: 500 }
}

export const deleteCategory = async (
  shopSlug: string,
  prevState: any,
  formData: FormData
) => {
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
          Shop: shopSlug,
        },
      }
    )
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 204) {
    revalidatePath(`/dashboard/${shopSlug}/products/categories`)
    return {
      status: 200,
      redirect: `/dashboard/${shopSlug}/products/categories`,
    }
  }
  return { message: "Something went wrong.", status: 500 }
}

export const getCategoryList = async (shopSlug: string) => {
  const token = await getToken()
  let response
  try {
    response = await fetch(`${process.env.API_BASE_URL}categories/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Shop: shopSlug,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    const data = await response.json()
    return { data, status: 200 }
  }
  return { message: "Something went wrong.", status: 500 }
}

export const getCategoryDetail = async (slug: string, id: number) => {
  const token = await getToken()
  let response
  try {
    response = await fetch(`${process.env.API_BASE_URL}categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Shop: slug,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    const data = await response.json()
    return { data, status: 200 }
  }
  return { message: "Something went wrong.", status: 500 }
}
