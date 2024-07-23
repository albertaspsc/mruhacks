"use client";
import { type Event, events } from "@/events/events";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EventCard } from "./EventCard";
import { EventDrawer } from "./EventDrawer";
const EventCards = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return events.map((event) => <EventCard key={event.id} event={event} />);
  }

  return events.map((event) => <EventDrawer key={event.id} event={event} />);
};

export default EventCards;
