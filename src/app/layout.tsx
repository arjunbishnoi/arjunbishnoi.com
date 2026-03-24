import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColorMeta } from "@/components/ThemeColorMeta";
import { Header } from "@/components/layout/Header";
import { PageLoadFadeIn } from "@/components/layout/PageLoadFadeIn";
import { socialLinks } from "@/lib/site-data";

const siteUrl = "https://arjunbishnoi.com";
const personImageUrl = `${siteUrl}/arjun-bishnoi.jpg`;
const profileDescription = "I build cross-platform mobile apps at the intersection of AI and design. Functional, intelligent and crafted with precision.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arjun Bishnoi — Mobile Apps, AI & Design",
  description: profileDescription,
  applicationName: "Arjun Bishnoi",
  authors: [{ name: "Arjun Bishnoi", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Arjun Bishnoi",
    "Mobile Application Developer",
    "AI Engineer",
    "UI UX Designer",
    "Toronto",
    "Canada",
    "React Native",
    "Next.js",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Arjun Bishnoi",
  publisher: "Arjun Bishnoi",
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
    title: "Arjun Bishnoi — Mobile Apps, AI & Design",
    description: profileDescription,
    url: `${siteUrl}/`,
    siteName: "Arjun Bishnoi",
    images: [
      {
        url: personImageUrl,
        width: 1200,
        height: 1200,
        alt: "Arjun Bishnoi headshot",
      },
    ],
    locale: "en_CA",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Bishnoi — Mobile Apps, AI & Design",
    description: profileDescription,
    images: [personImageUrl],
  },
  appleWebApp: {
    capable: true,
    title: "Arjun Bishnoi",
    statusBarStyle: "black-translucent",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Arjun Bishnoi",
    "og:site_name": "Arjun Bishnoi",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Arjun Bishnoi",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: `${siteUrl}/`,
      name: "Arjun Bishnoi",
      description: profileDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: { "@id": `${siteUrl}/#headshot` },
    },
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#headshot`,
      url: personImageUrl,
      contentUrl: personImageUrl,
      caption: "Arjun Bishnoi — Mobile Apps, AI & Design",
      representativeOfPage: true,
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Arjun Bishnoi",
      url: siteUrl,
      image: { "@id": `${siteUrl}/#headshot` },
      description: profileDescription,
      jobTitle: "Mobile Application Developer, AI Engineer, and UI/UX Designer",
      sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.behance],
      mainEntityOfPage: { "@id": `${siteUrl}/#profile-page` },
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeColorMeta />
          <Header />
          <PageLoadFadeIn>{children}</PageLoadFadeIn>
        </ThemeProvider>
      </body>
    </html>
  );
}
