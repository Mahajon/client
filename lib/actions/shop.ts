"use server"

import path from "path"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { getToken } from "@/lib/user"

export const submitShopForm = async (formData: any) => {
  console.log(formData)
  const token = await getToken()
  const response = await fetch(`${process.env.API_BASE_URL}shops/create/`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  console.log(data)
  if (response.status === 201) {
    const path = `/dashboard/${formData.shop_slug}/products/${data.id}`
    revalidatePath(path)
    redirect(path)
  } else {
    return { error: data }
  }
}

export const getShopList = async () => {
  const token = await getToken()
  try {
    const response = await fetch(`${process.env.API_BASE_URL}shops/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 401) {
      return { error: "Unauthorized", status: 401 }
    }
    if (response.status === 500) {
      return { error: "Internal server error", status: 500 }
    }
    {
      if (!response.ok) {
        return { error: "Something went wrong", status: response.status }
      }
    }
    const data = await response.json()
    return data.results
  } catch (error: any) {
    return { error: error.message, status: 500 }
  }
}

export const getShopDetails = async (slug: string) => {
  const token = await getToken()
  const response = await fetch(`${process.env.API_BASE_URL}shops/${slug}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  return data
}

// export const getShopDetails = async (slug: string) => {
//   // const cookieStore = cookies()
//   // if (cookieStore.has("shop")) {
//   //   const shop: any = cookieStore.get("shop")
//   //   console.log(JSON.parse(shop.value))
//   //   return JSON.parse(shop.value)
//   // } else {
//   const token = await getToken()
//   const response = await fetch(`${process.env.API_BASE_URL}shops/${slug}/`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   const data = await response.json()
//   // cookieStore.set("shop", JSON.stringify(data))
//   return data
//   // }
// }
