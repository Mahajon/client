import { getShopList } from "@/lib/actions/shop"

import Select from "./select"

export default async function ShopSelect() {
  const shops = await getShopList()
  return <Select shops={shops} />
}
