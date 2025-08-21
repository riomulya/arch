export async function GET() {
  const baseUrl = 'https://archcontinenttech.com';

  const staticPages = [
    '',
    '/about',
    '/products',
    '/services',
    '/contact',
    '/legal',
    '/blog',
    '/cart',
  ];

  const blogPosts = [
    'pentingnya-cable-management-dengan-core-tray',
    'cara-memilih-bahan-konstruksi-berkualitas',
    'profil-pt-arch-continent-tech',
    'tren-teknologi-konstruksi-2025',
    'panduan-instalasi-core-tray',
    'keunggulan-plastik-core-tray',
    'tips-maintenance-core-tray',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `
    )
    .join('')}
  ${blogPosts
    .map(
      (slug) => `
    <url>
      <loc>${baseUrl}/blog/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
