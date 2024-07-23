"use client";
import { type Announcement, announcements } from "@/events/announcements";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnnouncementCard } from "./AnnouncementCard";
import { AnnouncementDrawer } from "./AnnouncementDrawer";
const AnnouncementCards = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return announcements.map((announcement) => (
      <AnnouncementCard key={announcement.id} announcement={announcement} />
    ));
  }

  return announcements.map((announcement) => (
    <AnnouncementDrawer key={announcement.id} announcement={announcement} />
  ));
};

export default AnnouncementCards;
