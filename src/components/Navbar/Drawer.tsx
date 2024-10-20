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
import Customs from "@/lib/customs";

type Page = {
	title: string;
	href: string;
};

interface Props {
	pages: Page[];
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
	const { bgColor } = Customs();
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
					bgColor={bgColor}
				>
					<Button variant="outline" onClick={toggleColorMode} rounded="full">
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
				<DrawerBody bgColor={bgColor}>
					<Flex direction="column" rowGap={4} justify="center">
						<Button variant="ghost" rounded="full" as={Link} href="/">
							Home
						</Button>
						{pages.map((page, idx) => (
							<Button
								key={`${page.href}-${idx}`}
								variant="ghost"
								rounded="full"
								as={Link}
								href={page.href}
							>
								{page.title}
							</Button>
						))}
						<Button as={Link} href="/contact" colorScheme="blue" rounded="full">
							Get in touch
						</Button>
					</Flex>
				</DrawerBody>
				<DrawerFooter bgColor={bgColor}>
					<Social dir="row" isFull />
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
