import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://purnaa.store').replace(/\/+$/, '');

const routes = [
    '/',
    '/about',
    '/portfolio',
    '/contact',
    '/blog',
    '/faq'
];

const getBlogSlugs = () => {
    try {
        const blogsPath = path.resolve(__dirname, '../src/data/blogs.ts');
        const source = fs.readFileSync(blogsPath, 'utf8');
        const matches = [...source.matchAll(/slug:\s*'([^']+)'/g)];
        return [...new Set(matches.map(m => m[1]))];
    } catch {
        return [];
    }
};

const generateSitemap = () => {
    const allRoutes = [
        ...routes,
        ...getBlogSlugs().map(slug => `/blog/${slug}`)
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

    const distDir = path.resolve(__dirname, '../dist');
    const outputPath = fs.existsSync(distDir)
        ? path.resolve(distDir, 'sitemap.xml')
        : path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
