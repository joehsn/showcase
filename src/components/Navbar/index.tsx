import {
	Box,
	Container,
	Button,
	useColorMode,
	Icon,
	Flex,
	useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md";
import MobileDrawer from "./Drawer";
import Customs from "@/lib/customs";

const pages = [
	{ title: "Showcase", href: "showcase" },
	{ title: "Blog", href: "blog" },
	{ title: "About Me", href: "about-me" },
	{ title: "Get in touch", href: "get-in-touch" },
];

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
	const { bgColor, borderColor, isLargerThan768 } = Customs();
	const menuBtn = useRef(null);
	return (
		<Box
			position="sticky"
			top="0"
			zIndex="100"
			py="8"
			px={{
				base: 4,
				lg: 0,
			}}
			pointerEvents="none"
		>
			<Container
				pointerEvents="all"
				backdropFilter="blur(5px)"
				// bgColor="rgba(66, 153, 225, 0.4);"
				bgColor={bgColor}
				maxW="4xl"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				columnGap={4}
				w="full"
				border="1px solid rgba(144, 205, 244, 0.3)"
				borderWidth="1px"
				borderStyle="solid"
				borderColor={borderColor}
				rounded="full"
				py={4}
				px={{
					base: 4,
					lg: 8,
				}}
			>
				{isLargerThan768 ? (
					<>
						<Button
							fontFamily="heading"
							as={Link}
							href="/"
							letterSpacing="wide"
							fontSize="xl"
							variant="link"
							_hover={{
								textDecoration: "none",
							}}
						>
							@joehsn
						</Button>
						<Flex flex="1 0" columnGap={1} justify="flex-start">
							{pages.map((page, idx) => (
								<Button
									fontWeight="normal"
									key={`${page.href}-${idx}`}
									variant="ghost"
									rounded="full"
									as={Link}
									href={page.href}
								>
									{page.title}
								</Button>
							))}
						</Flex>
						{/* TODO: i18n implementation */}
						<Button onClick={toggleColorMode} rounded="full">
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
							variant="ghost"
							rounded="full"
							as={Link}
							href="/"
							fontSize="xl"
							letterSpacing="wide"
						>
							@joehsn
						</Button>
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
