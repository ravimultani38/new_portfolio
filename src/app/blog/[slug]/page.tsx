import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


export const revalidate = 60;


interface Post {
  title: string;
  mainImage?: string;
  body: any[]; 
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
  const post: Post = await client.fetch(query, { slug: params.slug });

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