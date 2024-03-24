import type { NextRequest } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "./app/api/auth/[...nextauth]/options"

export async function middleware(request: NextRequest) {
  //   console.log(request.cookies.get("session"))
    // const session = await getServerSession(authOptions)
  //   console.log(session)
  //   const currentUser = request.cookies.get("user")?.value
  //   if (currentUser && request.nextUrl.pathname.startsWith("/login")) {
  //     return Response.redirect(new URL("/dashboard", request.url))
  //   }
  //   if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
  //     return Response.redirect(new URL("/login", request.url))
  //   }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
