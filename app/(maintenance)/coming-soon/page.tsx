import Image from "next/image"

export default function ComingSoon() {
  return (
    <div className="h-screen w-screen items-center bg-secondary gap-2 text-secondary-foreground flex flex-col justify-center">
      <Image
        src="/logo/icon.svg"
        unoptimized
        alt="Logo"
        height="64"
        width="64"
      />

      <h1 className="font-cal text-3xl lg:text-7xl">Coming Soon</h1>
    </div>
  )
}
