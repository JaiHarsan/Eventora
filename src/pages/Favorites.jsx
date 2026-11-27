import { events } from "@/data/events";
import { EventCard } from "@/component/EventCard";

function Favorites() {
  const favoriteEvents = events.filter((event) => event.isFavorite);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Favorites</h2>
        <p className="text-sm text-gray-600">
          Events you saved to your favorites list.
        </p>
      </div>

      {favoriteEvents.length === 0 ? (
        <p className="text-sm text-gray-500">No favorite events yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {favoriteEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
