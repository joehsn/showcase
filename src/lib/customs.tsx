import { useColorModeValue, useMediaQuery } from "@chakra-ui/react";

export default function Customs() {
	const bgColor = useColorModeValue(
		"rgba(237, 242, 247, 0.2)",
		"rgba(144, 205, 244, 0.2)"
	);
	const borderColor = useColorModeValue(
		"rgba(237, 242, 247, 0.3)",
		"rgba(144, 205, 244, 0.3)"
	);
	const [isLargerThan768] = useMediaQuery("(min-width: 48em)", {
		ssr: true,
		fallback: false, // return false on the server, and re-evaluate on the client side
	});
	return {
		bgColor,
		borderColor,
		isLargerThan768,
	};
}
