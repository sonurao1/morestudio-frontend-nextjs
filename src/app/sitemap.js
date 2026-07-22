// Next.js auto-serves this at /sitemap.xml
// TODO: update SITE_URL to your real production domain, and add more
// entries here if you ever split content into separate routes/pages.
const SITE_URL = "https://www.morestudios.in";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
