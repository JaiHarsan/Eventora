import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required.")
    .min(3, "Full name must be at least 3 characters.")
    .max(50, "Full name must not exceed 50 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .regex(
      /^\+?\d{10,15}$/,
      "Phone number must be 10 to 15 digits with an optional leading +."
    ),
  eventId: z.string().min(1, "Please select an event."),
  ticketType: z
    .string()
    .refine((val) => val === "Standard" || val === "VIP", {
      message: "Please select a ticket type (Standard or VIP).",
    }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions to register.",
  }),
});
