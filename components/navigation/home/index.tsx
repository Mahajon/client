import { MainNav } from "@/components/navigation/home/main-nav"

import Background from "./bg"

export function SiteHeader() {
  return (
    <Background>
      {/* <header className="bg-background sticky top-0 z-40 w-full border-b"> */}
      <MainNav />
      {/* </header> */}
    </Background>
  )
}
