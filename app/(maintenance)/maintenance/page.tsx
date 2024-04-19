import Image from "next/image"

export default function Maintenance() {
  return (
    <div className="h-screen w-screen items-center bg-secondary gap-2 lg:gap-3 text-secondary-foreground flex flex-col justify-center">
      <Image
        src="/logo/icon.svg"
        unoptimized
        alt="Logo"
        height="64"
        width="64"
      />

      <h1 className="font-cal text-3xl lg:text-6xl">Maintenance Going On</h1>
      <h2 className="text-xl lg:text-3xl">Please Check Back Later...</h2>
      <p>We are sorry for the inconvenience caused.</p>
    </div>
  )
}
