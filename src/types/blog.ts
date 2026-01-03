export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content or Markdown
    author: string;
    date: string;
    image: string;
    tags: string[];
    keywords: string; // For SEO
}
