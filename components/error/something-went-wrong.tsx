export default function SomethingWentWrong({ error }: { error?: any }) {
  if (error == null) error = "Unknown"
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="font-cal text-4xl text-gray-800">
        Something went wrong
      </div>
      <div className="text-xl text-gray-600">Please try again later</div>
      <div className="text-xl text-gray-600">Error: {error}</div>
    </div>
  )
}
