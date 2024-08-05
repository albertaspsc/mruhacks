import { AnnouncementCard } from "./AnnouncementCard";
import { createClient } from "@/lib/supabase/server";

type Announcement = {
  created_at: string;
  subject: string;
  message: string;
};
const AnnouncementCards = async () => {
  const supabase = createClient();
  let { data, error } = await supabase
    .from("announcements")
    .select("created_at, subject, message")
    .order("created_at", { ascending: false });

  data = data ?? [];
  let entries = data.map((announcement: Announcement) => (
    <AnnouncementCard
      key={announcement.created_at}
      announcement={announcement}
    />
  ));

  return (
    <div className="border border-solid rounded-lg h-fit py-1 px-2 overflow-y-scroll">
      {...entries}
    </div>
  );
};

export default AnnouncementCards;
