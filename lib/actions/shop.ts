"use server"

import { getServerSession } from "next-auth"

import {
  authOptions,
  getSession,
  getToken,
} from "@/app/api/auth/[...nextauth]/options"

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
    return data
  } else {
    return { error: data }
  }
}

export const getShopList = async () => {
  const token = await getToken()
  const response = await fetch(`${process.env.API_BASE_URL}shops/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  return data
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
