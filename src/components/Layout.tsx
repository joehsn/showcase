import { Box, Container, ContainerProps } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props extends ContainerProps {
	children: React.ReactNode;
}

export default function Layout({ children, ...rest }: Props) {
	return (
		<Box as="main" position="relative">
			<Navbar />
			<Container
				maxW="4xl"
				px={{
					base: 4,
					lg: 0,
				}}
				{...rest}
			>
				{children}
			</Container>
			<Footer />
		</Box>
	);
}
