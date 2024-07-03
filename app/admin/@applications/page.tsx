import { createClient } from "@/lib/supabase/server";

import Table from "./table";

export default async function Applications() {
  return <Table></Table>;
}
