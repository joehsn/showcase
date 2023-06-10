import { MdCopyright } from "react-icons/md";
import { Container, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import Social from "./SocialLinks";

export default function Footer() {
	const [isLargerThan768] = useMediaQuery("(min-width: 48em)", {
		ssr: true,
		fallback: false, // return false on the server, and re-evaluate on the client side
	});
	return (
		<Container
			maxW="4xl"
			py="4"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
		>
			<Text
				display="flex"
				alignItems="center"
				columnGap={2}
				flex="1 0"
				justifyContent={{ base: "center", md: "start" }}
			>
				<Icon as={MdCopyright} boxSize="5" /> Copyright reserved -{" "}
				{new Date().getFullYear()}
			</Text>
			{isLargerThan768 ? <Social dir="row" /> : null}
		</Container>
	);
}
