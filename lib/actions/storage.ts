"use server"

import { randomUUID } from "crypto"
import { revalidatePath } from "next/cache"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

import { getToken } from "../user"

const s3client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY as string,
  },
  tls: false,
})

export const generateSignedUrl = async (key: string) => {
  try {
    const putobjectcommand = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME as string,
      Key: key,
    })
    let signedUrl = await getSignedUrl(s3client, putobjectcommand, {
      expiresIn: 120,
    })
    // if (process.env.NEXT_PUBLIC_SHOP_ROOT_DOMAIN?.includes("localhost")) {
    //   signedUrl = signedUrl.replace("https", `http`)
    // }
    return { url: signedUrl }
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function uploadProductImages(formData: FormData) {
  try {
    const productId = formData.get("productId") as string
    const shopSlug = formData.get("shopSlug") as string
    const token = await getToken()

    const response = await fetch(
      `${process.env.API_BASE_URL}products/${productId}/images/`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          Shop: shopSlug,
        },
      }
    )
    if (response.status === 201) {
      revalidatePath(`/dashboard/${shopSlug}/products/${productId}`)
      return {
        status: 201,
        message: "Images uploaded successfully",
      }
    }
    return {
      status: 500,
      message: "Failed to upload images",
    }
  } catch (error) {
    console.log(error)
  }
}
