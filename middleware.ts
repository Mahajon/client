import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { get } from "@vercel/edge-config"
import { getToken } from "next-auth/jwt"

export default async function middleware(request: NextRequest) {
  if (process.env.COMING_SOON === "true") {
    request.nextUrl.pathname = "/coming-soon"
    return NextResponse.rewrite(request.nextUrl)
  }
  if (process.env.VERCEL_ENV === "production") {
    const isInMaintenanceMode = await get("isInMaintenanceMode")
    if (isInMaintenanceMode) {
      request.nextUrl.pathname = "/maintenance"
      return NextResponse.rewrite(request.nextUrl)
    }
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })
    if (!token) {
      return NextResponse.rewrite(new URL("/login", request.url))
    }
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-url", request.url)
  // if (!cookies().get("next-auth.session-token"))
  //   if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //     return NextResponse.rewrite(new URL("/login", request.url))
  //   }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.ico|logo/.*\\.svg$).*)",
  ],
}
