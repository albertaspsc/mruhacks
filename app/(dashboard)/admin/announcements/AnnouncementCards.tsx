import { Database } from "@/types/supabase";
import { AnnouncementCard } from "./AnnouncementCard";
import { createClient } from "@/lib/supabase/server";

export type Announcement = Database["public"]["Tables"]["announcements"]["Row"];

const AnnouncementCards = async () => {
  const supabase = createClient();

  const { data } = await supabase
    .from("announcements")
    .select()
    .order("created_at", { ascending: false });

  return (
    <div className="border border-solid rounded-lg h-fit py-1 px-2 overflow-y-scroll">
      {(data ?? []).map((announcement) => (
        <AnnouncementCard
          key={announcement.created_at}
          announcement={announcement}
        />
      ))}
    </div>
  );
};

export default AnnouncementCards;
