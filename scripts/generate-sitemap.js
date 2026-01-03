import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog posts (we need to compile this or read the source file)
// Since this script runs in Node, we'll quickly regex the blogs.ts or define static for now
// For a production CLI, we'd use ts-node or similar.
// Here we will use a hardcoded approach for simplicity and robustness in this environment.

const BASE_URL = 'https://purnaa.store';

const routes = [
    '/',
    '/about',
    '/portfolio',
    '/contact',
    '/blog',
    '/faq'
];

const blogSlugs = [
    'best-corporate-gifts-bangalore-hyderabad',
    'award-winning-architecture-art-hyderabad',
    'meaning-of-spiritual-art'
];

const generateSitemap = () => {
    const allRoutes = [
        ...routes,
        ...blogSlugs.map(slug => `/blog/${slug}`)
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
