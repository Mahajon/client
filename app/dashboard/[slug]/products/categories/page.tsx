import CreateNewcategory from "./new"

export default async function Categories({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <div className="w-full h-full min-h-80 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed shadow-sm">
      <div>Select a category to view/edit.</div>
      <div>or</div>
      <CreateNewcategory />
    </div>
  )
}
