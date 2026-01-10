
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogs';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const Blog = () => {
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://purnaa.store';
    const baseUrl = siteUrl.replace(/\/+$/, '');
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
            }
        ]
    };

    return (
        <div className="pt-20 bg-art-cream min-h-screen">
            <SEO
                title="Blog - Art, Architecture & Corporate Gifting Insights"
                description="Read our latest insights on corporate gifting in Bangalore & Hyderabad, award-winning architectural art, and spiritual healing through creativity."
                keywords="art blog, corporate gifting blog, architecture blog, purnaa store blog"
                jsonLd={[breadcrumbSchemaNode]}
            />
            <Section>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl lg:text-5xl font-serif text-art-green mb-4">Journal & Insights</h1>
                        <p className="text-art-charcoal/60">Stories of Art, Culture, and Celebration</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                </Link>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-art-gold mb-3">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`}>
                                        <h2 className="text-xl font-serif text-art-green mb-3 hover:text-art-gold transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-art-charcoal/70 text-sm mb-4 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-art-gold hover:text-art-green transition-colors text-sm font-medium mt-auto"
                                    >
                                        Read Article <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};
