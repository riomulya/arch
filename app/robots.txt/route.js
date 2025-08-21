export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://archcontinenttech.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /about
Allow: /products
Allow: /services
Allow: /contact
Allow: /legal
Allow: /blog
Allow: /cart

# Crawl-delay
Crawl-delay: 1`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
