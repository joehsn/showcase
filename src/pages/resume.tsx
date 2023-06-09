import Head from "next/head";
import Layout from "@/components/Layout";
import { Heading, Text } from "@chakra-ui/react";

export default function Resume() {
	return (
		<>
			<Head>
				<title>Youssef Hassan&rsquo;s Resume - NextGen web developer</title>
			</Head>
			<Layout>
				<Heading w="full" textAlign="center">
					Resume
				</Heading>
				<Text fontSize="8xl" w="full" textAlign="center">
					SOON
				</Text>
			</Layout>
		</>
	);
}
