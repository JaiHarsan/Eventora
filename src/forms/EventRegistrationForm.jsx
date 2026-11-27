import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { events } from "@/data/events";
import { registrationSchema } from "@/schemas/registrationSchema";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Button } from "@/component/ui/button";

export function EventRegistrationForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventId: "",
      ticketType: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    const selectedEvent = events.find((event) => event.id === data.eventId);
    const eventTitle = selectedEvent ? selectedEvent.title : "selected event";

    setSuccessMessage(
      `Registration successful for ${data.fullName} (${data.ticketType} ticket - ${eventTitle}).`
    );
    reset();
  };

  return (
    <div className="w-full max-w-lg rounded-lg border bg-white p-6">
      <h2 className="text-xl font-bold text-gray-900">Event Registration</h2>
      <p className="mt-1 text-sm text-gray-600">
        Fill out your details to register for an event.
      </p>

      {successMessage && (
        <div className="mt-4 rounded-md border border-green-300 bg-green-50 p-3 text-sm text-green-800">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-1"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+12345678901"
            className="mt-1"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="eventId">Select Event</Label>
          <select
            id="eventId"
            className="mt-1 h-9 w-full rounded-md border border-input bg-white px-3 text-sm"
            {...register("eventId")}
          >
            <option value="">-- Select an event --</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title} ({event.date})
              </option>
            ))}
          </select>
          {errors.eventId && (
            <p className="mt-1 text-xs text-red-600">{errors.eventId.message}</p>
          )}
        </div>

        <div>
          <Label>Ticket Type</Label>
          <div className="mt-2 flex gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                value="Standard"
                className="accent-green-600"
                {...register("ticketType")}
              />
              Standard
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                value="VIP"
                className="accent-green-600"
                {...register("ticketType")}
              />
              VIP
            </label>
          </div>
          {errors.ticketType && (
            <p className="mt-1 text-xs text-red-600">{errors.ticketType.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="accent-green-600"
              {...register("terms")}
            />
            I accept the Terms and Conditions
          </label>
          {errors.terms && (
            <p className="mt-1 text-xs text-red-600">{errors.terms.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-green-600 text-white hover:bg-green-700"
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default EventRegistrationForm;
