"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import AnnouncementDrawer from "./AnnouncementDrawer";
import AnnouncementAlert from "./AnnouncementAlert";

import { handleAnnouncementSubmit } from "./handleSubmit";
const AnnouncementConfirm = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <AnnouncementAlert />;
  }

  return <AnnouncementDrawer />;
};

export default AnnouncementConfirm;
