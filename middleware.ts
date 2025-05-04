import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Allow next-auth routes, login/register pages
        if (
          pathname.startsWith("/api/auth") ||
          pathname === "/login" ||
          pathname === "/register"
        ) {
          return true;
        }

        // Public routes
        if (
          pathname === "/" ||
          pathname.startsWith("/batches") ||
          pathname.startsWith("/contact")
        ) {
          return true;
        }

        // Protect everything else (like /user)
        return !!token;
      }
    }
  }
);

// Apply middleware only to these paths
export const config = {
  matcher: ["/user/:path*", "/admin/:path*"], // or any protected route
};
