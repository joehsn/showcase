import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

export interface PostMeta {
	excerpt: string;
	slug: string;
	title: string;
	tags: string[];
	date: string;
}

export interface Post {
	content: string;
	meta: PostMeta;
}

const postsPath = path.join(process.cwd(), "src", "content", "posts");

export function getSlugs(): string[] {
	const paths = sync("*.mdx", {
		cwd: postsPath,
	});

	return paths;
}

export const getPostFromSlug = (slug: string): Post => {
	const postPath = path.join(postsPath, `${slug}`);
	const source = fs.readFileSync(postPath);
	const { content, data } = matter(source);

	return {
		content,
		meta: {
			slug,
			excerpt: data.excerpt ?? null,
			title: data.title,
			tags: data.tags?.sort(),
			date: data.date ?? null,
		},
	};
};

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
