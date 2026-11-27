import { events } from "@/data/events";
import { StatusCard } from "@/component/StatusCard";
import { EventCard } from "@/component/EventCard";

function Dashboard() {
  const myEventsCount = events.filter((e) => e.isRegistered).length;
  const favoritesCount = events.filter((e) => e.isFavorite).length;
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black">Welcome!</h2>
        <p className="mt-1 text-sm text-gray-700">
          Discover and explore upcoming events.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatusCard title="Total Events" value={events.length} />
        <StatusCard title="My Events" value={myEventsCount} />
        <StatusCard title="Favorites" value={favoritesCount} />
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-black">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
