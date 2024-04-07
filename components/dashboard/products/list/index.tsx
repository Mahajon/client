import { columns } from "./columns"
import Empty from "./empty"
import ProductTable from "./table"

export default function ProductListPage({
  products,
}: {
  products: {
    count: number
    next: string
    previous: string
    results: any[]
  }
}) {
  if (products.count === 0) {
    return <Empty />
  }
  return (
    <div className="p-4 m-4">
      <ProductTable columns={columns} data={products.results} />
    </div>
  )
}
