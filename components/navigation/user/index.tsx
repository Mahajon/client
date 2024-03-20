import Link from "next/link"
// import { getSession } from "@/lib/auth"
import { getServerSession } from "next-auth"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

import { UserDropdownMenu } from "./dropdown"
import LoginButton from "./loginButton"

// const UserNavigation = async () => {
//   const session = await getServerSession(authOptions)
//   console.log(session)

//   if (session) {
//     return <UserDropdownMenu session={session} />
//   }
//   return (
//     <>
//       <Link href="/login">
//         <div
//           className={buttonVariants({
//             size: "icon",
//             variant: "ghost",
//           })}
//         >
//           Login
//         </div>
//       </Link>
//     </>
//   )
// }

async function UserNavigation() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return (
      <>
        <ThemeToggle /> <LoginButton />
      </>
    )
  }
  return <UserDropdownMenu user={session?.user} />
}

export default UserNavigation
