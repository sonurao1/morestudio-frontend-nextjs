// Next.js auto-serves this at /robots.txt
const SITE_URL = "https://www.morestudios.in";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
