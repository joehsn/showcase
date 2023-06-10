import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";

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
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Text
					fontSize={{ base: "3xl", lg: "4xl" }}
					textAlign={{ base: "center", lg: "start" }}
				>
					I&rsquo;m
				</Text>
				<Heading
					as="h1"
					w="full"
					fontSize={{ base: "6xl", lg: "8xl" }}
					whiteSpace={{ lg: "nowrap" }}
					letterSpacing={{ lg: "0.25rem" }}
					textAlign="center"
					lineHeight={{ base: "0.9", lg: "0.7" }}
				>
					YOUSSEF HASSAN
				</Heading>
				<Text
					fontSize={{ base: "3xl", lg: "4xl" }}
					w="full"
					textAlign={{ base: "center", lg: "end" }}
				>
					Front-end web developer
				</Text>
			</Layout>
		</>
	);
}
