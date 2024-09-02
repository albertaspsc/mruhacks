"use client";
import { type Event, events } from "@/lib/events/events";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EventCard } from "./EventCard";
import EventDrawer from "./EventDrawer";

const EventCards = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return events.map((event: Event) => (
      <EventCard key={event.id} {...event} />
    ));
  }

  return events.map((event: Event) => (
    <EventDrawer key={event.id} {...event} />
  ));
};

export default EventCards;
