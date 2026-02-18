import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const PAGES_QUERY = `*[
  _type == "page"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);
  const pages = await client.fetch<SanityDocument[]>(PAGES_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ul className="flex flex-col gap-y-4">
        {projects.map((project) => (
          <li className="hover:underline" key={project._id}>
            <Link href={`/projects/${project.slug.current}`}>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p>{new Date(project.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h1 className="text-4xl font-bold mb-8">Pages</h1>
      <ul className="flex flex-col gap-y-4">
        {pages.map((page) => (
          <li className="hover:underline" key={page._id}>
            <Link href={`/${page.slug.current}`}>
              <h2 className="text-xl font-semibold">{page.title}</h2>
              <p>{new Date(page.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
