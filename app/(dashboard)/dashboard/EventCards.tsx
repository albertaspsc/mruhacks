import { createClient } from "@/lib/supabase/server";
import { EventCard } from "./EventCard";
const EventCards = async () => {
  const supabase = createClient();

  const { data } = await supabase
    .from("events")
    .select()
    .order("created_at", { ascending: false });

  const events = data ?? [];

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
