import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Icon,
	MenuButton,
	Stack,
	Link as StyledLink,
	useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdLightMode, MdDarkMode, MdClose } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import type { MutableRefObject } from "react";

interface Props {
	pages: string[];
	isOpen: boolean;
	onClose: () => void;
	menuBtn: MutableRefObject<null>;
}

export default function MobileDrawer({
	pages,
	isOpen,
	onClose,
	menuBtn,
}: Props) {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Drawer
			isOpen={isOpen}
			placement="right"
			onClose={onClose}
			finalFocusRef={menuBtn}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					py="6"
				>
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
					<Button
						variant="ghost"
						colorScheme="gray"
						onClick={onClose}
						rounded="full"
					>
						<Icon as={MdClose} boxSize={6} />
					</Button>
				</DrawerHeader>
				<DrawerBody>
					<Flex direction="column" rowGap={4} justify="center">
						<Button variant="ghost" rounded="full" as={Link} href="/">
							Home
						</Button>
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
				</DrawerBody>
				<DrawerFooter>
					<Stack direction="row" w="full" justify="center" spacing={4}>
						<StyledLink
							href="https://wa.me/message/2CEEIOGIE6MAO1"
							_hover={{
								color: "blue.400",
							}}
						>
							<Icon as={FaWhatsapp} boxSize={6} />
						</StyledLink>
						<StyledLink
							href="https://linkedin.com/in/joehsn"
							_hover={{
								color: "blue.400",
							}}
						>
							<Icon as={FaLinkedinIn} boxSize={6} />
						</StyledLink>
						<StyledLink
							href="https://twitter.com/_joehsn"
							_hover={{
								color: "blue.400",
							}}
						>
							<Icon as={FaTwitter} boxSize={6} />
						</StyledLink>
						<StyledLink
							href="https://github.com/joehsn"
							_hover={{
								color: "blue.400",
							}}
						>
							<Icon as={FaGithub} boxSize={6} />
						</StyledLink>
					</Stack>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
