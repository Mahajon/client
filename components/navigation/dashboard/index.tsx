import DashboardSidebar from "../sidebar"
import DashboardHeader from "./header"

interface RootLayoutProps {
  children: React.ReactNode
}
const DashboardNav = ({ children }: RootLayoutProps) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">
      <DashboardSidebar />
      <div className="flex flex-col  relative">
        <DashboardHeader /> {children}
      </div>
    </div>
  )
}

export default DashboardNav
