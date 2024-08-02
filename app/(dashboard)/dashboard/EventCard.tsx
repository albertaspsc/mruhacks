import { Button } from "@/components/ui/button";
export function EventCard({ event }) {
  return (
    <>
      <div className="p-4 my-2 border border-solid rounded-xl">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-semibold">{event.title}</h1>
        </div>
        <div className="flex flex-row justify-between text-md font-medium">
          <h3>
            {event.start} - {event.end}
          </h3>
          <h3>{event.location}</h3>
        </div>
        <p>{event.description}</p>
        <div className="flex flex-row-reverse">
          <Button
            type="button"
            className="bg-primary text-white font-semibold text-md flex flex-row-reverse"
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
