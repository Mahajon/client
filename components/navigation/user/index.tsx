import { getUser } from "@/lib/user"
import LoginButton from "@/components/auth/login"
import { ThemeToggle } from "@/components/theme-toggle"

import { UserDropdownMenu } from "./dropdown"

export default async function UserNavigation() {
  const user = await getUser()

  if (!user) {
    return (
      <div className="flex items-center">
        <ThemeToggle />
        <LoginButton />
      </div>
    )
  }
  return <UserDropdownMenu user={user} />
}
