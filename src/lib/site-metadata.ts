import type { Metadata } from "next";
import { defaultKeywords, siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/content/social-links";

const personImageDescription =
  "Developer and designer building cross-platform mobile apps at the intersection of AI and design. Functional, intelligent, and crafted with precision.";

const mainSitelinkPages = [
  { name: "Work", path: "/work" },
  { name: "Mobile Apps", path: "/apps" },
  { name: "AI/ML", path: "/ai" },
  { name: "Design", path: "/design" },
  { name: "Blog", path: "/blog" },
] as const;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.canonicalHomeUrl,
  },
  title: {
    default: siteConfig.title,
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
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.canonicalHomeUrl,
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
    title: siteConfig.title,
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

const websiteId = `${siteConfig.url}/#website`;
const profilePageId = `${siteConfig.url}/#profile-page`;
const personId = `${siteConfig.url}/#person`;
const headshotId = `${siteConfig.url}/#headshot`;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.canonicalHomeUrl,
      name: siteConfig.name,
      alternateName: [...siteConfig.alternateNames],
    },
    ...mainSitelinkPages.map((page) => ({
      "@type": "SiteNavigationElement",
      "@id": `${siteConfig.url}${page.path}#site-navigation`,
      name: page.name,
      url: `${siteConfig.url}${page.path}`,
      isPartOf: { "@id": websiteId },
    })),
  ],
};

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      url: siteConfig.canonicalHomeUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      primaryImageOfPage: { "@id": headshotId },
    },
    {
      "@type": "ImageObject",
      "@id": headshotId,
      name: siteConfig.name,
      url: siteConfig.images.headshot,
      contentUrl: siteConfig.images.headshot,
      width: { "@type": "QuantitativeValue", value: 1323, unitCode: "E37" },
      height: { "@type": "QuantitativeValue", value: 1323, unitCode: "E37" },
      encodingFormat: "image/jpeg",
      description: personImageDescription,
      caption: siteConfig.name,
      thumbnailUrl: siteConfig.images.portrait,
      creator: { "@id": personId },
      creditText: siteConfig.name,
      copyrightNotice: `(c) ${new Date().getFullYear()} ${siteConfig.name}`,
      license: siteConfig.canonicalHomeUrl,
      acquireLicensePage: `${siteConfig.url}/#contact`,
      representativeOfPage: true,
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteConfig.canonicalHomeUrl,
      image: { "@id": headshotId },
      description: siteConfig.description,
      jobTitle: "Mobile Application Developer, AI Engineer, and UI/UX Designer",
      sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.behance],
      mainEntityOfPage: { "@id": profilePageId },
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
  keywords?: string[];
  authors?: Metadata["authors"];
  creator?: string;
  publisher?: string;
  includeSocial?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  socialTitle?: string;
  socialDescription?: string;
  absoluteTitle?: boolean;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  articleAuthors?: string[];
  twitterCard?: "summary" | "summary_large_image";
};

export function buildPageMetadata({
  title,
  path,
  description = siteConfig.sectionDescription,
  index = true,
  keywords,
  authors,
  creator,
  publisher,
  includeSocial = false,
  imageUrl = siteConfig.shareImage.url,
  imageAlt,
  socialTitle,
  socialDescription,
  absoluteTitle = false,
  openGraphType = "website",
  publishedTime,
  articleSection,
  articleTags,
  articleAuthors,
  twitterCard = "summary_large_image",
}: PageMetadataOptions): Metadata {
  const pageTitle =
    absoluteTitle || title === siteConfig.name ? { absolute: title } : title;
  const resolvedSocialTitle =
    socialTitle ??
    (title === siteConfig.name ? siteConfig.name : `${title} - ${siteConfig.name}`);
  const resolvedSocialDescription = socialDescription ?? description;
  const metadata: Metadata = {
    title: pageTitle,
    description,
    robots: { index, follow: true },
    ...(keywords ? { keywords } : {}),
    ...(authors ? { authors } : {}),
    ...(creator ? { creator } : {}),
    ...(publisher ? { publisher } : {}),
  };

  if (path) {
    metadata.alternates = { canonical: path };
  }

  if (includeSocial && path) {
    const pageUrl = new URL(path, siteConfig.url).toString();
    metadata.openGraph = {
      title: resolvedSocialTitle,
      description: resolvedSocialDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      type: openGraphType,
      images: [
        {
          url: imageUrl,
          alt: imageAlt ?? `${resolvedSocialTitle} preview image`,
        },
      ],
      ...(openGraphType === "article" && publishedTime
        ? {
            publishedTime,
            ...(articleSection ? { section: articleSection } : {}),
            ...(articleTags?.length ? { tags: articleTags } : {}),
            ...(articleAuthors?.length ? { authors: articleAuthors } : {}),
          }
        : {}),
    };
    metadata.twitter = {
      card: twitterCard,
      title: resolvedSocialTitle,
      description: resolvedSocialDescription,
      images: [imageUrl],
    };
  }

  return metadata;
}
