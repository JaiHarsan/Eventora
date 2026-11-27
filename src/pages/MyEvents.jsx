import { events } from "@/data/events";
import { EventCard } from "@/component/EventCard";

function MyEvents() {
  const myEvents = events.filter((event) => event.isRegistered);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Events</h2>
        <p className="text-sm text-gray-600">
          Events you have registered to attend.
        </p>
      </div>

      {myEvents.length === 0 ? (
        <p className="text-sm text-gray-500">
          You have not registered for any events yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {myEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyEvents;
