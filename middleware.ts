import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-url", request.url)
  if (!cookies().get("next-auth.session-token"))
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.rewrite(new URL("/login", request.url))
    }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
