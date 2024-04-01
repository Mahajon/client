import Image from "next/image"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: RootLayoutProps) {
  return (
    <>
      {" "}
      <div className="w-full lg:grid min-h-screen  lg:grid-cols-2 ">
        <div className="flex items-center justify-center py-12">{children}</div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="size-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  )
}
