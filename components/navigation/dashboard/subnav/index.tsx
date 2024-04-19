"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

import Navbar from "./Navbar"
import { customerUrls } from "./customer"
import { orderUrls } from "./order"
import { productUrls } from "./product"
import { settingsUrls } from "./settings"

export default function SubNav() {
  const { slug }: { slug: string } = useParams()
  const pathname = usePathname()
  const pathlist = pathname.split("/")
  let urlList: any[] = []

  switch (pathlist[3]) {
    case "products":
      urlList = productUrls
      break
    case "orders":
      urlList = orderUrls
      break
    case "customers":
      urlList = customerUrls
      break
    case "settings":
      urlList = settingsUrls
    default:
      break
  }
  return (
    <Navbar slug={slug} pathList={pathlist} urlList={getURLlist(pathlist[3])} />
  )
}

function getURLlist(path: string) {
  let urlList: any[] = []
  switch (path) {
    case "products":
      urlList = productUrls
      break
    case "orders":
      urlList = orderUrls
      break
    case "customers":
      urlList = customerUrls
      break
    default:
      break
  }
  return urlList
}
