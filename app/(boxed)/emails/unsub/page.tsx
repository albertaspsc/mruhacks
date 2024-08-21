import { createClient } from "@/lib/supabase/server";

export default function Page({
  searchParams,
}: {
  searchParams?: { email?: string; sig?: string; uuid?: string };
}) {
  const supabase = createClient();

  if (searchParams?.sig && searchParams.email && searchParams?.uuid) {
    supabase.rpc("unsubscribe_email", {
      in_email: searchParams?.email,
      in_sig: searchParams?.sig,
      in_uuid: searchParams?.uuid,
    });

    return <p>Done!</p>;
  }

  return <p>Invalid URL</p>;
}
