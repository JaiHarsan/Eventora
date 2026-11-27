import { useState } from "react";
import { events } from "@/data/events";
import { EventCard } from "@/component/EventCard";
import { Input } from "@/component/ui/input";

function ExploreEvents() {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Explore Events</h2>
        <p className="text-sm text-gray-600">
          Browse all upcoming events on Eventora.
        </p>
      </div>

      <div className="max-w-sm">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events by title or city..."
          className="bg-white"
        />
      </div>

      {filteredEvents.length === 0 ? (
        <p className="text-sm text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExploreEvents;
