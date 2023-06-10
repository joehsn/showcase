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
	useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdLightMode, MdDarkMode, MdClose } from "react-icons/md";
import type { MutableRefObject } from "react";
import Social from "../SocialLinks";

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
						<Button as={Link} href="/contact" colorScheme="blue" rounded="full">
							Get in touch
						</Button>
					</Flex>
				</DrawerBody>
				<DrawerFooter>
					<Social dir="row" isFull />
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
