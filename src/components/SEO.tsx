import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    noindex?: boolean;
    jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO = ({
    title = "Purnaa Store — Exquisite Corporate Gifts & Artistic Collections",
    description = "Discover Purnaa Store's exclusive collection of corporate gifts, artistic creations, and custom bundles. Elevate your gifting experience with our premium, handcrafted selections.",
    keywords = "corporate gifts, artistic gifts, custom bundles, purnaa store, premium gifts, handcrafted art, business gifting",
    image = "/logoweb.webp",
    url,
    type = "website",
    noindex = false,
    jsonLd
}: SEOProps) => {
    const location = useLocation();

    const siteName = "Purnaa Store";
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://purnaa.store";

    const canonicalUrl = useMemo(() => {
        if (url) {
            return url.startsWith('http://') || url.startsWith('https://')
                ? url
                : new URL(url, siteUrl).toString();
        }
        return new URL(location.pathname, siteUrl).toString();
    }, [location.pathname, siteUrl, url]);

    const absoluteImageUrl = useMemo(() => {
        if (image.startsWith('http://') || image.startsWith('https://')) return image;
        return new URL(image.startsWith('/') ? image : `/${image}`, siteUrl).toString();
    }, [image, siteUrl]);

    const brandLogoUrl = useMemo(() => {
        return new URL('/logoweb.webp', siteUrl).toString();
    }, [siteUrl]);

    const siteTitle = useMemo(() => {
        const trimmed = title.trim();
        const alreadyIncludesBrand = trimmed.toLowerCase().includes(siteName.toLowerCase());
        return alreadyIncludesBrand ? trimmed : `${trimmed} | ${siteName}`;
    }, [siteName, title]);

    const structuredData = useMemo(() => {
        const baseUrl = siteUrl.replace(/\/+$/, '');
        const organizationId = `${baseUrl}/#organization`;
        const websiteId = `${baseUrl}/#website`;

        const graph: Array<Record<string, unknown>> = [
            {
                "@type": "Organization",
                "@id": organizationId,
                "name": siteName,
                "url": baseUrl,
                "logo": {
                    "@type": "ImageObject",
                    "url": brandLogoUrl
                },
                "sameAs": [
                    "https://instagram.com/ashapura_art_studio",
                    "https://www.linkedin.com/in/pallavi-jain-303b3923/",
                    "https://www.facebook.com/pallaviartlove/",
                    "https://pin.it/5Exhvu4he"
                ],
                "email": "artist.pallavibhandari@gmail.com",
                "telephone": "+919553339663",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Hyderabad",
                    "addressRegion": "Telangana",
                    "addressCountry": "IN"
                }
            },
            {
                "@type": "WebSite",
                "@id": websiteId,
                "url": baseUrl,
                "name": siteName,
                "publisher": { "@id": organizationId },
                "inLanguage": "en-IN"
            },
            {
                "@type": "WebPage",
                "@id": `${canonicalUrl}#webpage`,
                "url": canonicalUrl,
                "name": siteTitle,
                "description": description,
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": absoluteImageUrl
                },
                "isPartOf": { "@id": websiteId },
                "about": { "@id": organizationId },
                "inLanguage": "en-IN"
            }
        ];

        if (Array.isArray(jsonLd)) graph.push(...jsonLd);
        else if (jsonLd) graph.push(jsonLd);

        return {
            "@context": "https://schema.org",
            "@graph": graph
        };
    }, [absoluteImageUrl, brandLogoUrl, canonicalUrl, description, jsonLd, siteName, siteTitle, siteUrl]);

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />
            <meta
                name="robots"
                content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImageUrl} />
            <meta property="og:image:alt" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImageUrl} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};
