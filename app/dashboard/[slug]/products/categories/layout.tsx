import { getCategoryList } from "@/lib/actions/category"
import CategoryEmptyPage from "@/components/dashboard/category/empty"
import CategoryDivider from "@/components/dashboard/category/list/divider"

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  console.log("params", params)
  const categories = await getCategoryList(params.slug)
  if (categories.data.count > 0) {
    return (
      <CategoryDivider data={categories.data.results}>
        children={children}
      </CategoryDivider>
    )
  }
  return <CategoryEmptyPage />
}
