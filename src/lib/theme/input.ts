import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
	field: {
		cursor: "pointer",
		_focus: {
			cursor: "text",
			_placeholder: {
				color: "transparent",
			},
		},
	},
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
