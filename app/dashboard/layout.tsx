interface RootLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: RootLayoutProps) {
  return <div className="relative">{children}</div>
}
