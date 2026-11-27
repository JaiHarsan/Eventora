import { Link } from "react-router-dom";

export const EventCard = ({ event }) => {
  if (!event) return null;

  return (
    <div className="border border-gray-200 bg-white p-4">
      <p className="text-xs font-medium text-green-700">{event.category}</p>
      <h3 className="mt-1 text-base font-semibold text-black">{event.title}</h3>
      <p className="mt-2 text-sm text-gray-700">{event.date}</p>
      <p className="text-sm text-gray-700">{event.location}</p>

      <div className="mt-4">
        <Link
          to="/register"
          className="inline-block bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
