import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export const SEO = ({
    title = "Purnaa Store - Exquisite Corporate Gifts & Artistic Collections",
    description = "Discover Purnaa Store's exclusive collection of corporate gifts, artistic creation, and custom bundles. Elevate your gifting experience with our premium, handcrafted selections.",
    keywords = "corporate gifts, artistic gifts, custom bundles, purnaa store, premium gifts, handcrafted art, business gifting",
    image = "/logoweb.webp",
    url = "https://purnaa.store",
    type = "website"
}: SEOProps) => {
    const siteTitle = title === "Purnaa Store - Exquisite Corporate Gifts & Artistic Collections"
        ? title
        : `${title} | Purnaa Store`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Purnaa Store",
                    "url": url,
                    "logo": image,
                    "sameAs": [
                        // Add social media links here if available
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "", // Add phone if available
                        "contactType": "customer service"
                    }
                })}
            </script>
        </Helmet>
    );
};
