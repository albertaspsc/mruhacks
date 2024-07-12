import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { get_perms, get_perms_by_user_id } from "../auth/getPerms";

export const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  // this will refresh session ONLY if expired
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const isAdmin = !!(
      (await get_perms_by_user_id(user?.id as string)).data?.length ?? 0 > 0
    );

    if (!isAdmin) {
      const url = request.nextUrl.clone();
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  if (
    !user &&
    request.nextUrl.pathname !== "/" &&
    // These both mean we are already on a login screen and a redirect is not needed
    !(
      request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/unauthorized") ||
      request.nextUrl.searchParams.get("modal") === "login"
    )
  ) {
    const url = request.nextUrl.clone();
    url.searchParams.set("modal", "login");
    return NextResponse.redirect(url);
  }

  return response;
};
