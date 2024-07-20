import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createClient } from "@/lib/supabase/server";

export default async function Page({ params }: { params: { id: number } }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("user_flag_types")
    .select("name, user_help")
    .eq("id", params.id)
    .maybeSingle();

  if (!data && !error) {
    return (
      <DialogContent>
        <DialogHeader>Info could not be found</DialogHeader>
      </DialogContent>
    );
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{data?.name}</DialogTitle>
      </DialogHeader>
      <dl>
        <dt className="font-semibold">Help</dt>
        <dd>{data?.user_help ?? "No help text found"}</dd>
      </dl>
    </DialogContent>
  );
}
