import DashboardHeader from "./header"
import DashboardSidebar from "./sidebar"

interface RootLayoutProps {
  children: React.ReactNode
}
const DashboardNav = ({ children }: RootLayoutProps) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <DashboardHeader /> {children}
      </div>
    </div>
  )
}

export default DashboardNav
