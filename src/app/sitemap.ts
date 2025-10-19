import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { groq } from 'next-sanity';

// Define the type for the fetched post slugs
interface PostSlug {
  slug: string;
  _updatedAt: string; 
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://harpreetbuilds.com'; 


  const query = groq`*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;
  const posts: PostSlug[] = await client.fetch(query);

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt), // Use the post's last update time
    changeFrequency: 'weekly' as 'weekly', // How often posts might change
    priority: 0.6,
  }));

  // 2. Define your static page URLs
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(), // Use today's date or a specific last modification date
      changeFrequency: 'monthly' as 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(), // Use today's date or when the blog index might change
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.8,
    },
  ];

  // 3. Combine static and dynamic URLs
  return [...staticUrls, ...postUrls];
}