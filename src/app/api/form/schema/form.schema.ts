import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  company: z.string().min(1, "Company Name is required"),
  email: z.string().min(1, "Email is required").email(),
  subject: z.string().min(1, "Subject  is required"),
  interestedIn: z.string(),
});
export const quoteFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  company: z.string().min(1, "Company Name is required"),
  email: z.string().min(1, "Email is required").email(),
  interestedIn: z.string().array(),
  additional: z.string(),
});
export const probeMeFormSchema = z.object({
  name: z
    .string()
    .min(1, "First Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  // email: z.string().optional(),
  email: z.string().min(1, "Email is required").email(),
  company: z.string().optional(),
  phone: z.string().optional(),
});
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  company: z.string().min(1, "Company Name is required"),
  email: z.string().min(1, "Email is required").email(),
  subject: z.string().min(1, "Subject is required"),
  interestedIn: z.string(),
});

export const demoFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .regex(new RegExp("^[a-z]*$", "i")),
  company: z.string(),
  email: z.string().min(1, "Email is required").email(),
  subject: z.string().optional(),
  interestedIn: z.string(),
  phone: z.string().optional(),
  productName: z.string().optional(),
});
