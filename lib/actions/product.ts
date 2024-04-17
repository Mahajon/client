"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { getToken, getUser } from "../user"
import { getShopDetails } from "./shop"

export const createProduct = async (formData: any, shopSlug: string) => {
  let data: any
  try {
    const token = await getToken()
    const response = await fetch(`${process.env.API_BASE_URL}products/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    data = await response.json()
    if (response.status === 201) {
    } else if (response.status === 401) {
      return { error: "Unauthorized", status: 401 }
    } else if (response.status === 404) {
      return { error: "Not found", status: 404 }
    } else {
      return { error: "Internal server error", status: 500 }
    }
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  revalidatePath(`/dashboard/${shopSlug}/products`)
  redirect(`/dashboard/${shopSlug}/products/${data.id}`)
}

export const getProducts = async (params: string) => {
  let data: any
  // const shop = await getShopDetails(shopSlug)
  const shop = { id: 3 }
  try {
    const token = await getToken()
    const response = await fetch(
      `${process.env.API_BASE_URL}products/?${params}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
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
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
  return data
}
