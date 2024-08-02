import { type Announcement, announcements } from "@/events/announcements";
import { AnnouncementCard } from "./AnnouncementCard";
const AnnouncementCards = () => {
  let entries = announcements.map((announcement) => (
    <AnnouncementCard key={announcement.id} announcement={announcement} />
  ));

  return (
    <div className="border border-solid rounded-lg h-fit py-1 px-2 overflow-y-scroll">
      {...entries}
    </div>
  );
};

export default AnnouncementCards;
