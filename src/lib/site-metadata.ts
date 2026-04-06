import type { Metadata } from "next";
import { defaultKeywords, siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/content/social-links";

const personImageDescription =
  "Developer and designer building cross-platform mobile apps at the intersection of AI and design. Functional, intelligent, and crafted with precision.";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  generator: "Next.js",
  keywords: [...defaultKeywords],
  referrer: "origin-when-cross-origin",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.titleSuffix}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.shareImage.url,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: siteConfig.shareImage.alt,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.titleSuffix}`,
    description: siteConfig.description,
    images: [siteConfig.shareImage.url],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  other: {},
};

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile-page`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#person` },
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      primaryImageOfPage: { "@id": `${siteConfig.url}/#headshot` },
    },
    {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#headshot`,
      name: siteConfig.name,
      url: siteConfig.images.headshot,
      contentUrl: siteConfig.images.headshot,
      description: personImageDescription,
      caption: siteConfig.name,
      thumbnailUrl: siteConfig.images.portrait,
      creator: { "@id": `${siteConfig.url}/#person` },
      creditText: siteConfig.name,
      copyrightNotice: `(c) ${new Date().getFullYear()} ${siteConfig.name}`,
      license: `${siteConfig.url}/`,
      acquireLicensePage: `${siteConfig.url}/#contact`,
      representativeOfPage: true,
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: [{ "@id": `${siteConfig.url}/#headshot` }, siteConfig.images.portrait],
      description: siteConfig.description,
      jobTitle: "Mobile Application Developer, AI Engineer, and UI/UX Designer",
      sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.behance],
      mainEntityOfPage: { "@id": `${siteConfig.url}/#profile-page` },
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
    },
  ],
};

type PageMetadataOptions = {
  title: string;
  path?: string;
  description?: string;
  index?: boolean;
  includeSocial?: boolean;
  imageUrl?: string;
};

export function buildPageMetadata({
  title,
  path,
  description = siteConfig.sectionDescription,
  index = true,
  includeSocial = false,
  imageUrl = siteConfig.images.headshot,
}: PageMetadataOptions): Metadata {
  const pageTitle = title === siteConfig.name ? siteConfig.name : title;
  const metadata: Metadata = {
    title: pageTitle,
    description,
    robots: { index, follow: true },
  };

  if (path) {
    metadata.alternates = { canonical: path };
  }

  if (includeSocial && path) {
    const pageUrl = new URL(path, siteConfig.url).toString();
    metadata.openGraph = {
      title: pageTitle,
      description,
      url: pageUrl,
      images: [{ url: imageUrl }],
    };
    metadata.twitter = {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    };
  }

  return metadata;
}
