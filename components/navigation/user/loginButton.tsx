import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

const LoginButton = () => {
  return (
    <>
      <Link href="/login">
        <div
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
          })}
        >
          Login
        </div>
      </Link>
    </>
  )
}

export default LoginButton
