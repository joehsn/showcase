import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

interface Post {
	content: string;
	meta: PostMeta;
}

export interface PostMeta {
	excerpt: string;
	slug: string;
	title: string;
	tags: string[];
	date: string;
}

export function getSlugs(): string[] {
	const paths = sync(process.cwd() + "/src/content/posts/*.mdx");

	return paths.map((path) => {
		const parts = path.split("\\");
		const fileName = parts[parts.length - 1];
		const [slug, _ext] = fileName.split(".");
		return slug;
	});
}

export function getAllPosts() {
	const posts = getSlugs()
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1;
			if (a.meta.date < b.meta.date) return -1;
			return 0;
		})
		.reverse();
	return posts;
}

export const getPostFromSlug = (slug: string): Post => {
	const postPath = path.join(
		process.cwd() + "/src/content/posts",
		`${slug}.mdx`
	);
	const source = fs.readFileSync(
		process.cwd() + "/src/content/posts/" + slug + ".mdx"
	);
	const { content, data } = matter(source);

	return {
		content,
		meta: {
			slug,
			excerpt: data.excerpt,
			title: data.title,
			tags: data.tags?.sort(),
			date: data.date,
		},
	};
};
