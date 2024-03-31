import Link from "next/link"
// import { getSession } from "@/lib/auth"
import { getServerSession } from "next-auth"

import { buttonVariants } from "@/components/ui/button"
import LoginButton from "@/components/auth/login"
import { ThemeToggle } from "@/components/theme-toggle"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

import { UserDropdownMenu } from "./dropdown"

export default async function UserNavigation() {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    return <UserDropdownMenu user={session?.user} />
  }
  return (
    <>
      <ThemeToggle />
      <LoginButton />
    </>
  )
}
