import { Manrope, Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/sections/SmoothScrolling";


const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// TODO: replace with your real production domain before deploying.
const SITE_URL = "https://www.morestudios.in";
const SITE_NAME = "MoreStudios";
const SITE_TITLE = "MoreStudios | Corporate Video Production Company";
const SITE_DESCRIPTION =
  "We create corporate films, product videos, commercials, training and animation that inform, engage and inspire.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | MoreStudios",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "corporate video production",
    "product video company",
    "corporate film production India",
    "video production company Delhi",
    "training video production",
    "animation and 3D video company",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        // TODO: point this to a real 1200x630 social-share image in /public
        url: "/global_images/hero5.png",
        width: 1200,
        height: 630,
        alt: "MoreStudios — Corporate Video Production Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/global_images/hero5.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};

// Organization / LocalBusiness structured data so Google can understand
// who this business is, where it's based, and how to contact it.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+91 98765 43210",
  email: "hello@morestudios.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-body text-ink overflow-x-hidden" suppressHydrationWarning={true}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
