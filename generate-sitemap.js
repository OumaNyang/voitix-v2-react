// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Array of URLs to include in the sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/accounting', changefreq: 'monthly', priority: 0.7 },
  { url: '/products', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs', changefreq: 'monthly', priority: 0.7 },
  { url: '/login', changefreq: 'monthly', priority: 0.7 },
  // Add more URLs as needed
];


const sitemapStream = new SitemapStream({ hostname: 'https://voitix.azacloud.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemapStream.pipe(writeStream);

urls.forEach((url) => sitemapStream.write(url));
sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => console.log('Sitemap generated successfully'))
  .catch((error) => console.error('Error generating sitemap', error));
