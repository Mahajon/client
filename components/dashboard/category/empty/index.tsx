import CreateNewcategory from "../new"

export default function CategoryEmpty() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="font-cal text-2xl">You have no categories</h3>
          <CreateNewcategory />
        </div>
      </div>
    </main>
  )
}
