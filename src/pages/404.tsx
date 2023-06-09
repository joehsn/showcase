import Layout from "@/components/Layout";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Not found</title>
			</Head>
			<Layout>
				<Box fontSize="9xl" textAlign="center">
					404
				</Box>
				<Box fontSize="3xl" textAlign="center">
					Not found
				</Box>
				<Flex justify="center">
					<Button
						as={Link}
						href="/"
						variant="solid"
						colorScheme="telegram"
						size="lg"
						rounded="full"
						leftIcon={<Icon as={FaArrowLeft} boxSize={4} />}
					>
						Go Home
					</Button>
				</Flex>
			</Layout>
		</>
	);
}
