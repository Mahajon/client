import { getUser } from "@/lib/user"
import LoginButton from "@/components/auth/login"
import { ThemeToggle } from "@/components/theme-toggle"

import { UserDropdownMenu } from "./dropdown"

export default async function UserNavigation() {
  const user = await getUser()

  if (user) {
    return <UserDropdownMenu user={user} />
  }
  return (
    <>
      <ThemeToggle />
      <LoginButton />
    </>
  )
  return null
}
