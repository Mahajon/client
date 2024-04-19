"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { getToken, getUser } from "../user"
import { getShopDetails } from "./shop"

export const createProduct = async (formData: any, shopSlug: string) => {
  let data: any
  let response
  try {
    const token = await getToken()
    response = await fetch(`${process.env.API_BASE_URL}products/`, {
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
    data = await response.json()
    revalidatePath(`/dashboard/${shopSlug}/products`)
    redirect(`/dashboard/${shopSlug}/products/${data.id}`)
  } else if (response.status === 401) {
    return { error: "Unauthorized", status: 401 }
  } else if (response.status === 404) {
    return { error: "Not found", status: 404 }
  } else {
    return { error: "Internal server error", status: 500 }
  }
}

export const getProducts = async (params: string) => {
  let data: any
  let response
  try {
    const token = await getToken()
    response = await fetch(`${process.env.API_BASE_URL}products/?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error: any) {
    return { error: "Internal server error", status: 500 }
  }
  if (response.status === 200) {
    data = await response.json()
    return data
  } else if (response.status === 401) {
    return { error: "Unauthorized", status: 401 }
  } else if (response.status === 404) {
    return { error: "Not found", status: 404 }
  } else {
    return { error: "Internal server error", status: 500 }
  }
}

export const getProduct = async (id: number) => {
  let data: any
  const token = await getToken()
  const response = await fetch(`${process.env.API_BASE_URL}products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  data = await response.json()
  if (response.status === 200) {
    return data
  } else if (response.status === 401) {
    return { error: "Unauthorized", status: 401 }
  } else if (response.status === 404) {
    return { error: "Not found", status: 404 }
  } else {
    return { error: "Internal server error", status: 500 }
  }
}

export const updateProduct = async (
  shopSlug: string,
  prevState: any,
  formData: any
) => {
  const id = formData.get("id")
  const token = await getToken()
  let response
  try {
    response = await fetch(`${process.env.API_BASE_URL}products/${id}/`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    revalidatePath(`/dashboard/${shopSlug}/products`)
    return { status: 200 }
  } else if (response.status === 401) {
    return { error: "Unauthorized", status: 401 }
  } else if (response.status === 404) {
    return { error: "Not found", status: 404 }
  } else {
    return { error: "Internal server error", status: 500 }
  }
}
