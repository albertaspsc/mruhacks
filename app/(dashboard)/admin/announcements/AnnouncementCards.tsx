import { AnnouncementCard } from "./AnnouncementCard";
import { createClient } from "@/lib/supabase/server";

export type Announcement = {
  created_at: string;
  subject: string;
  id: string;
  message: string;
};

const AnnouncementCards = async () => {
  const supabase = createClient();

  const { data } = await supabase
    .from("announcements")
    .select("created_at, subject, id,message")
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
