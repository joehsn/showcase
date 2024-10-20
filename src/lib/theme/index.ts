import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./input";
import { textareaTheme } from "./textarea";
import "@fontsource/ia-writer-mono";

export const theme = extendTheme({
	config: {
		initialColorMode: "system",
		useSystemColorMode: true,
	},
	styles: {
		global: (props: { colorMode: string }) => ({
			"html, body": {
				backgroundColor: props.colorMode == "dark" ? "blue.800" : "white",
			},
		}),
	},
	colors: {
		brand: {
			neonBlue: "#2d55ff",
			crimson: "#dc143c",
		},
	},
	fonts: {
		body: "var(--font-montserrat)",
		heading: "var(--font-raleway)",
		mono: "var(--font-ia-writer)",
	},
	components: { Input: inputTheme, Textarea: textareaTheme },
});
