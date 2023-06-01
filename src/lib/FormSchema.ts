import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
	name: Yup.string()
		.required("How would i call you without your name?")
		.min(2, "What are you, Mr. X?")
		.max(60, "BRUH, it's just your name not your life story"),
	email: Yup.string()
		.required("How would i contact you back without your email?")
		.email("Enter a proper email, Bruh!"),
	message: Yup.string()
		.required("Ahmm, this is required, do i really have to say that?")
		.min(6, "Write a proper message, Bruh!"),
});
