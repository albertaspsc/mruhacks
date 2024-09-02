import { Button } from "@/components/ui/button";
import { type Event } from "@/lib/events/events";
export function EventCard(event: Event) {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
  };
  return (
    <div className="p-4 my-2 border border-solid rounded-xl">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">{event.title}</h1>
      </div>
      <div className="flex flex-row justify-between text-md font-medium">
        <h3>{event.startDate.toLocaleDateString("en-us", dateOptions)}</h3>
        <h3>{event.location}</h3>
      </div>
      <div>
        <h4>
          {event.startDate.toLocaleTimeString("en-us", timeOptions)} -{" "}
          {event.endDate.toLocaleTimeString("en-us", timeOptions)}
        </h4>
      </div>
      <br />
      <p>{event.description}</p>
      <div className="flex flex-row-reverse">
        <a href={event.registration} target="_blank">
          <Button
            type="button"
            className="bg-primary text-white font-semibold text-md flex flex-row-reverse"
          >
            Register
          </Button>
        </a>
      </div>
    </div>
  );
}
