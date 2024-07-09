import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "@/lib/supabase/middleware";
import { createClient } from "./lib/supabase/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });
  const path = request.nextUrl.pathname;

  // Too improve load time we don't bother checking auth on static resources
  // or images
  if (
    path.startsWith("/_next/static") ||
    path.startsWith("/_next/image") ||
    path === "/favicon.ico"
  ) {
    return response;
  }
  const supabase = createClient();

  // Verify that the user is valid
  await supabase.auth.getUser();

  return response;
}

export const config = {};
