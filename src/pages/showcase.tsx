import Head from "next/head";
import Layout from "@/components/Layout";
import { Heading, Text } from "@chakra-ui/react";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<Layout>
				<Heading w="full" textAlign="center">
					Projects
				</Heading>
				<Text fontSize="8xl" w="full" textAlign="center">
					SOON
				</Text>
			</Layout>
		</>
	);
}
