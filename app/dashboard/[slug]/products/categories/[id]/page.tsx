import { getCategoryDetail } from "@/lib/actions/category"
import CategoryUpdateForm from "@/components/dashboard/category/detail/update"

import CategoryDeleteDialog from "../delete"

export default async function CategoryDetail({
  params,
}: {
  params: { slug: string; id: number }
}) {
  const category = await getCategoryDetail(params.slug, params.id)
  if (!category.data) {
    return <div>Category not found</div>
  }
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="font-cal text-3xl">{category.data.name}</div>
        <div className="flex gap-2">
          <CategoryDeleteDialog data={category.data} />
          <CategoryUpdateForm data={category.data} />
        </div>
      </div>
      <div>Category ID: {category.data.id}</div>
      <div></div>
    </div>
  )
}
