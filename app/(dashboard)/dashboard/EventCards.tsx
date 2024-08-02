import { type Event, events } from "@/events/events";
import { EventCard } from "./EventCard";
const EventCards = () => {
  let entries = events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return (
    <div className="border border-solid rounded-lg h h-fit py-1 px-2 overflow-y-scroll">
      {...entries}
    </div>
  );
};

export default EventCards;
