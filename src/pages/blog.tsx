import Head from "next/head";
import Layout from "@/components/Layout";
import { Heading, Text } from "@chakra-ui/react";

export default function Blog() {
	return (
		<>
			<Head>
				<title>Youssef Hassan&rsquo;s Blog - NextGen web developer</title>
			</Head>
			<Layout>
				<Heading w="full" textAlign="center">
					Blog
				</Heading>
				<Text fontSize="8xl" w="full" textAlign="center">
					SOON
				</Text>
			</Layout>
		</>
	);
}
