import { getCategoryList } from "@/lib/actions/category"

import CategoryDivider from "./divider"
import CategoryEmptyPage from "./empty"

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const categories = await getCategoryList(params.slug)
  if (categories.data.count > 0) {
    return (
      <CategoryDivider data={categories.data.results}>
        {children}
      </CategoryDivider>
    )
  }
  return <CategoryEmptyPage />
}
