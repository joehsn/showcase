import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Box as="main">
			<Navbar />
			<Container maxW="4xl" py="28">
				{children}
			</Container>
			<Footer />
		</Box>
	);
}
