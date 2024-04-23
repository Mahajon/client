import DashboardNav from "@/components/navigation/dashboard"

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({ children }: RootLayoutProps) {
  return <DashboardNav>{children}</DashboardNav>
}
