import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./lib/supabase/server";
import { get_perms } from "./lib/auth/getPerms";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });
  const { pathname, origin, searchParams } = request.nextUrl;

  // Too improve load time we don't bother checking auth on static resources
  // or images
  if (
    pathname.startsWith("/_next/static") ||
    pathname.startsWith("/_next/image") ||
    pathname === "/favicon.ico"
  ) {
    return response;
  }
  const supabase = createClient();

  // Verify that the user is valid
  await supabase.auth.getUser();

  if (pathname.startsWith("/admin") && !searchParams.get("modal")) {
    const has_perms = !!((await get_perms()).data?.length ?? 0 > 0);

    const unauth = new URL("/admin", origin);
    unauth.searchParams.set("modal", "login");

    if (!has_perms) {
      return NextResponse.redirect(unauth);
    }
  }

  return response;
}

export const config = {};
