import { Button } from "@/components/ui/button"
import Empty from "@/components/dashboard/products/list/empty"

export default async function Products() {
  let products = []
  if (products.length === 0) {
    return <Empty />
  }
  return <></>
}
