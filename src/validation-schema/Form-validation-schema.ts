import { z } from "zod";

export const FormsData = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .refine((value) => value.length > 0, {
      message: "First name cannot be just spaces",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .refine((value) => value.length > 0, {
      message: "Last name cannot be just spaces",
    }),
  company: z
    .string()
    .trim()
    .min(1, "Company name is required")
    .refine((value) => value.length > 0, {
      message: "Company name cannot be just spaces",
    }),
  email: z.string().trim().min(1, "Email is required").email("Invalid email"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .refine((value) => value.length > 0, {
      message: "Subject cannot be just spaces",
    }),
  interestedIn: z
    .string()
    .trim()
    .refine(
      (value) =>
        value.split(/\s+/).filter((word) => word.length > 0).length >= 5,
      { message: "Interested In must contain at least 4 words" }
    ),
  productName: z.string().default("Default Product Name"), // Default value in schema
});
export const requestQuates = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .refine((value) => value.length > 0, {
      message: "First name cannot be just spaces",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .refine((value) => value.length > 0, {
      message: "Last name cannot be just spaces",
    }),
  company: z
    .string()
    .trim()
    .min(1, "Company name is required")
    .refine((value) => value.length > 0, {
      message: "Company name cannot be just spaces",
    }),
  email: z.string().trim().min(1, "Email is required").email("Invalid Email"),
  interestedIn: z.string().array().optional(),
  additional: z
    .string()
    .trim()
    .refine(
      (value) =>
        value.split(/\s+/).filter((word) => word.length > 0).length >= 5,
      { message: "Interested In must contain at least 4 words" }
    ),
});
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const industryInsights = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .refine((value) => value.length > 0, {
      message: "First name cannot be just spaces",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .refine((value) => value.length > 0, {
      message: "Last name cannot be just spaces",
    }),
  company: z.string(),
  email: z.string().trim().min(1, "Email is required").email("Invalid Email"),
  phone: z
    .string()
    .regex(phoneRegex, "Contact number must only contain numeric digits")
    .min(10, { message: "Contact number must have at least 10 digits" })
    .max(10, { message: "Contact number can have at most 10 digits" })
    .optional()
    .or(z.literal("")),
  interestedIn: z
    .string()
    .trim()
    .refine(
      (value) =>
        value.split(/\s+/).filter((word) => word.length > 0).length >= 5,
      { message: "Interested In must contain at least 4 words" }
    ),
});

export const requestProbeMe = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .refine((value) => value.length > 0, {
      message: "Name cannot be just spaces",
    }),
  email: z.string().trim().min(1, "Email is required").email("Invalid Email"),
  company: z.string(),
  phone: z.string().optional(),
  // .regex(phoneRegex, "Phone number must only contain numeric digits")
  // .min(10, { message: "Phone number must have at least 10 digits" })
  // .max(10, { message: "Phone number can have at most 10 digits" })
  // .optional()
  // .or(z.literal("")),
});
