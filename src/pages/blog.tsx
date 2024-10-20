import Head from "next/head";
import Layout from "@/components/Layout";
import { Heading, Text } from "@chakra-ui/react";
import { getAllPosts, Post } from "@/utils/getPosts";
import { useEffect } from "react";

type Props = {
	posts: Post[];
};

export default function Blog({ posts }: Props) {
	useEffect(() => {
		console.log(JSON.stringify(posts));
	}, [posts]);
	return (
		<>
			<Head>
				<title>Youssef Hassan&rsquo;s Blog - NextGen web developer</title>
			</Head>
			<Layout>
				<Heading w="full" textAlign="center">
					Blog
				</Heading>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
}
