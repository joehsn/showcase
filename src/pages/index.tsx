import Head from "next/head";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Avatar from "@/components/Avatar";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Youssef Hassan - NextGen web developer</title>
				<meta
					name="description"
					content="Youssef Hassan - NextGen web developer"
				/>
				<meta name="author" content="Youssef Hassan" />
				<meta name="keywords" content="web developer, front-end developer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="manifest" href="manifest.json" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<Layout pb={16}>
				<Flex
					direction={{
						base: "column-reverse",
						md: "row",
					}}
					rowGap={{
						base: 8,
						md: 0,
					}}
					alignItems="center"
					columnGap={4}
				>
					<Box>
						<Text as="div" fontSize="4xl">
							Hello there! 👋
						</Text>
						<Heading
							as="div"
							size={{
								base: "4xl",
								md: "3xl",
							}}
							mb={2}
							lineHeight="short"
						>
							I&rsquo;m Youssef Hassan
						</Heading>
						<Text fontSize="xl" mb={8}>
							A self-taught front-end developer who lives for turning ideas into
							awesome websites.
						</Text>
						<Button
							colorScheme="blue"
							rounded="full"
							as={Link}
							href="/about-me"
						>
							More about me
						</Button>
					</Box>
					<Flex
						w={{
							base: "full",
							md: "50%",
						}}
						justify="center"
					>
						<Avatar
							w={{
								base: "350px",
								md: "250px",
							}}
						/>
					</Flex>
				</Flex>
			</Layout>
		</>
	);
}
