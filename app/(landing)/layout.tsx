import { SiteHeader } from "@/components/navigation/home"
import Footer from "@/components/navigation/home/footer"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  )
}
