import { z } from "zod";

export const FormSchema = z.object({
	name: z
		.string({
			required_error: "Name is required!",
		})
		.regex(/^[a-zA-Z\s]+$/, "Letters and spaces are only allowed!")
		.min(2, "Name must at least be 2 Letters!")
		.max(50, "Name must at most be 50 Letters!")
		.trim(),
	email: z
		.string({
			required_error: "Email is required!",
		})
		.email("Invalid email address!")
		.regex(
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/,
			"Invalid email address!"
		)
		.trim(),
	message: z
		.string({
			required_error: "Message is required!",
		})
		.regex(
			/^[a-zA-Z0-9\s.,!?]+$/,
			"Letters, numbers, and common punctuation are only allowed"
		)
		.min(10, "Message must at least be 10 characters long!")
		.max(600, "Message must at most be 600 characters long!")
		.trim(),
});
