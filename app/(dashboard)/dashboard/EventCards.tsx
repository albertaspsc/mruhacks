"use client";
import { events } from "@/events/events";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EventCard } from "./EventCard";
import EventDrawer from "./EventDrawer";

const EventCards = ({ events }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return events.map((event, id) => <EventCard key={id} event={event} />);
  }

  return events.map((event, id) => <EventDrawer key={id} event={event} />);
};

export default EventCards;
