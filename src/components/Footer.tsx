import { MdCopyright } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import {
	Container,
	Icon,
	Link,
	Stack,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";

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
			{isLargerThan768 ? (
				<Stack direction="row" spacing={4}>
					<Link
						href="https://wa.me/message/2CEEIOGIE6MAO1"
						_hover={{
							color: "whatsapp.400",
						}}
					>
						<Icon as={FaWhatsapp} boxSize={6} />
					</Link>
					<Link
						href="https://linkedin.com/in/joehsn"
						_hover={{
							color: "blue.400",
						}}
					>
						<Icon as={FaLinkedinIn} boxSize={6} />
					</Link>
					<Link
						href="https://twitter.com/_joehsn"
						_hover={{
							color: "cyan.400",
						}}
					>
						<Icon as={FaTwitter} boxSize={6} />
					</Link>
					<Link href="https://github.com/joehsn">
						<Icon as={FaGithub} boxSize={6} />
					</Link>
				</Stack>
			) : null}
		</Container>
	);
}
