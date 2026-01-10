
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogs';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export const BlogPost = () => {
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://purnaa.store';
    const baseUrl = siteUrl.replace(/\/+$/, '');
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const blogPostingSchemaNode = {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": new URL(post.image, siteUrl).toString(),
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@id": `${baseUrl}/#organization`
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": new URL(`/blog/${post.slug}`, siteUrl).toString()
        }
    };

    const breadcrumbSchemaNode = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": new URL('/blog', siteUrl).toString()
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": new URL(`/blog/${post.slug}`, siteUrl).toString()
            }
        ]
    };

    return (
        <div className="pt-20 bg-art-cream min-h-screen">
            <SEO
                title={post.title}
                description={post.excerpt}
                keywords={post.keywords}
                image={post.image}
                type="article"
                jsonLd={[blogPostingSchemaNode, breadcrumbSchemaNode]}
            />
            <Section>
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-art-gold hover:text-art-green transition-colors mb-8"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Blog
                    </Link>

                    <article className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-[400px] object-cover"
                        />

                        <div className="p-8 lg:p-12">
                            <div className="flex flex-wrap items-center gap-6 text-sm text-art-charcoal/60 mb-6 font-medium">
                                <span className="flex items-center gap-2"><Calendar size={16} className="text-art-gold" /> {post.date}</span>
                                <span className="flex items-center gap-2"><User size={16} className="text-art-gold" /> {post.author}</span>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-serif text-art-green mb-8 leading-tight">
                                {post.title}
                            </h1>

                            <div
                                className="prose prose-lg prose-headings:font-serif prose-headings:text-art-green prose-p:text-art-charcoal/80 prose-a:text-art-gold hover:prose-a:text-art-green prose-li:text-art-charcoal/80"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="mt-12 pt-8 border-t border-art-charcoal/10">
                                <div className="flex flex-wrap gap-2">
                                    <Tag size={20} className="text-art-gold mr-2" />
                                    {post.tags.map(tag => (
                                        <span key={tag} className="bg-art-gold/10 text-art-charcoal px-3 py-1 rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </Section>
        </div>
    );
};
