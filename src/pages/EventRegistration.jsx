import { Link } from "react-router-dom";
import { EventRegistrationForm } from "@/forms/EventRegistrationForm";

function EventRegistration() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-lg">
        <div className="mb-4">
          <Link to="/" className="text-sm font-medium text-green-600 hover:underline">
            &larr; Back to Dashboard
          </Link>
        </div>

        <EventRegistrationForm />
      </div>
    </div>
  );
}

export default EventRegistration;
