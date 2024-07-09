import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./server";

export async function verifySession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createClient();
  await supabase.auth.getUser();

  return response;
}
