import Head from "next/head";
import Layout from "@/components/Layout";
import { Heading, Text } from "@chakra-ui/react";

export default function AboutMe() {
	return (
		<>
			<Head>
				<title>About Youssef Hassan - NextGen web developer</title>
			</Head>
			<Layout>
				<Heading w="full" textAlign="center">
					About me
				</Heading>
				<Text fontSize="8xl" w="full" textAlign="center">
					SOON
				</Text>
			</Layout>
		</>
	);
}
