import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity"; // <-- 1. IMPORT THE CORRECT TYPE

// Revalidate the page every 60 seconds
export const revalidate = 60; 

// Define a type for our post data
interface Post {
  title: string;
  mainImage?: string;
  body: PortableTextBlock[]; // <-- 2. APPLY THE CORRECT TYPE
}

const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "mainImage": mainImage.asset->url,
    body
  }
`;

// This function tells Next.js which slugs (blog posts) to pre-build
export async function generateStaticParams() {
  const posts: { slug: string }[] = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );
 
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="container mx-auto py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        {post.mainImage && (
          <div className="aspect-video relative mb-8">
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold font-display text-center mb-8">{post.title}</h1>
        
        {/* Render the rich text content */}
        <div className="prose dark:prose-invert max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  );
}