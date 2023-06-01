import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./input";
import { textareaTheme } from "./textarea";

export const theme = extendTheme({
	config: {
		initialColorMode: "system",
		useSystemColorMode: true,
	},
	colors: {
		brand: {
			neonBlue: "#2d55ff",
			crimson: "#dc143c",
		},
	},
	fonts: {
		body: "var(--font-vidaloka)",
		heading: "var(--font-roboto)",
		mono: "var(--font-jetBrain)",
	},
	components: { Input: inputTheme, Textarea: textareaTheme },
});
