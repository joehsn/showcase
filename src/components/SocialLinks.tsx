import { Icon, Link, Stack } from "@chakra-ui/react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

interface Props {
	dir: "row" | "column";
	isFull?: boolean;
}

export default function Social({ dir, isFull }: Props) {
	return (
		<Stack
			direction={dir}
			w={isFull ? "full" : "auto"}
			alignItems="center"
			justify="center"
			spacing={4}
		>
			<Link
				href="https://wa.me/message/2CEEIOGIE6MAO1"
				_hover={{
					color: "blue.400",
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
					color: "blue.400",
				}}
			>
				<Icon as={FaTwitter} boxSize={6} />
			</Link>
			<Link
				href="https://github.com/joehsn"
				_hover={{
					color: "blue.400",
				}}
			>
				<Icon as={FaGithub} boxSize={6} />
			</Link>
		</Stack>
	);
}
