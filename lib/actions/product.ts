"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { v4 as uuidv4 } from "uuid"

import { getToken, getUser } from "../user"
import { getShopDetails } from "./shop"

export const createProduct = async (
  shopSlug: string,
  prevState: any,
  formData: any
) => {
  let data: any
  let response
  try {
    const token = await getToken()
    response = await fetch(`${process.env.API_BASE_URL}products/`, {
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
    data = await response.json()
    revalidatePath(`/dashboard/${shopSlug}/products`)
    return {
      status: 201,
      data,
      message: "Product created successfully",
      redirect: `/dashboard/${shopSlug}/products/${data.id}`,
    }
  }
  return { message: "Internal server error", status: 500 }
}

export const getProducts = async (shopSlug: string, params: string) => {
  let data: any
  let response
  try {
    const token = await getToken()
    response = await fetch(`${process.env.API_BASE_URL}products/?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Shop: shopSlug,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    data = await response.json()
    return data
  } else {
    return { error: "Something went wrong", status: 500 }
  }
}

export const getProduct = async (shopSlug: string, id: number) => {
  let data: any
  const token = await getToken()
  const response = await fetch(`${process.env.API_BASE_URL}products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Shop: shopSlug,
    },
  })
  data = await response.json()
  if (response.status === 200) {
    return data
  } else if (response.status === 404) {
    return { message: "Product Not found", status: 404 }
  } else {
    return { message: "Something wrong happened", status: 500 }
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
        Shop: shopSlug,
      },
    })
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  if (response.status === 200) {
    const data = await response.json()
    revalidatePath(`/dashboard/${shopSlug}/products/${id}`)
    return {
      status: 200,
      message: `<strong>${data.name}</strong> updated successfully`,
    }
  }
  return {
    message: `Coudn't update <strong>${formData.name}</strong> product. Try again.`,
    status: 500,
  }
}
