import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

// Revalidate the page every 60 seconds
export const revalidate = 60; 

const query = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->title
  }
`;

// Define a type for our post data for TypeScript
interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage?: string;
  publishedAt: string;
  authorName: string;
  categories: string[];
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(query);

  return (
    <div className="container mx-auto py-24 sm:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-display">The Blog</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Thoughts on web development, technology, and career.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <Card className="flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
              <CardHeader className="flex-grow">
                {post.mainImage && (
                  <div className="aspect-video relative mb-4">
                    <Image
                      src={post.mainImage}
                      alt={`${post.title} image`}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>by {post.authorName}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}