import {
	Box,
	Container,
	Button,
	useColorMode,
	Icon,
	Flex,
	useMediaQuery,
	useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md";
import MobileDrawer from "./Drawer";

const pages = ["About", "Projects", "Resume", "Blog"];

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
	const [isLargerThan768] = useMediaQuery("(min-width: 48em)", {
		ssr: true,
		fallback: false, // return false on the server, and re-evaluate on the client side
	});
	const menuBtn = useRef(null);
	return (
		<Box py="8">
			<Container
				maxW="4xl"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				columnGap={4}
			>
				<Button
					variant="ghost"
					rounded="full"
					as={Link}
					href="/"
					fontSize="xl"
					letterSpacing="wide"
				>
					@joehsn
				</Button>
				{isLargerThan768 ? (
					<>
						<Flex flex="1 0" columnGap={4} justify="center">
							{pages.map((page, idx) => (
								<Button
									key={`${page.toLowerCase()}-${idx}`}
									variant="ghost"
									rounded="full"
									as={Link}
									href={page.toLowerCase()}
								>
									{page}
								</Button>
							))}
						</Flex>
						<Button as={Link} href="/contact" colorScheme="blue" rounded="full">
							Get in touch
						</Button>
						<Button
							variant="outline"
							colorScheme="gray"
							onClick={toggleColorMode}
							rounded="full"
						>
							{colorMode === "light" ? (
								<Icon as={MdDarkMode} boxSize={4} />
							) : (
								<Icon as={MdLightMode} boxSize={4} />
							)}
						</Button>
					</>
				) : (
					<>
						<Button
							ref={menuBtn}
							variant="outline"
							colorScheme="gray"
							onClick={onOpen}
							rounded="full"
						>
							<Icon as={MdMenu} boxSize={4} />
						</Button>
						<MobileDrawer
							pages={pages}
							isOpen={isOpen}
							onClose={onClose}
							menuBtn={menuBtn}
						/>
					</>
				)}
			</Container>
		</Box>
	);
}
