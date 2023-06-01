import { defineStyleConfig } from "@chakra-ui/react";

export const textareaTheme = defineStyleConfig({
	baseStyle: {
		cursor: "pointer",
		_focus: {
			cursor: "text",
			_placeholder: {
				color: "transparent",
			},
		},
	},
});
