export default function CategoryDetail({ params }: { params: { id: number } }) {
  return (
    <div>
      Category Detail
      <div>Category ID: {params.id}</div>
    </div>
  )
}
