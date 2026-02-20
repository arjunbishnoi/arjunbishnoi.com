import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColorMeta } from "@/components/ThemeColorMeta";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arjun Bishnoi — Mobile Apps, AI & Design",
  description: "Consistent, hands-on, and always evolving.",
  applicationName: "Arjun Bishnoi",
  authors: [{ name: "Arjun Bishnoi", url: "https://arjunbishnoi.com" }],
  generator: "Next.js",
  keywords: ["Arjun Bishnoi", "Full Stack Developer", "UI/UX Designer", "Web Developer", "React", "Vue", "Node.js"],
  referrer: "origin-when-cross-origin",
  creator: "Arjun Bishnoi",
  publisher: "Arjun Bishnoi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Arjun Bishnoi — Mobile Apps, AI & Design",
    description: "Consistent, hands-on, and always evolving.",
    url: "https://arjunbishnoi.com/",
    siteName: "Arjun Bishnoi",
    images: [
      {
        url: "https://arjunbishnoi.com/arjun-bishnoi-profile-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Arjun Bishnoi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Bishnoi — Mobile Apps, AI & Design",
    description: "Consistent, hands-on, and always evolving.",
    images: ["https://arjunbishnoi.com/arjun-bishnoi-profile-square.jpg"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  appleWebApp: {
    capable: true,
    title: "Arjun Bishnoi",
    statusBarStyle: "default",
  },
  other: {
    "mobile-web-app-capable": "yes",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "Arjun Bishnoi",
      "url": "https://arjunbishnoi.com/",
      "alternateName": ["arjunbishnoi.com"]
    },
    {
      "@type": "Person",
      "name": "Arjun Bishnoi",
      "url": "https://arjunbishnoi.com",
      "sameAs": [
        "https://github.com/arjunbishnoi",
        "https://linkedin.com/in/arjunbishnoi"
      ],
      "image": "https://arjunbishnoi.com/arjun-bishnoi-profile-square.jpg",
      "jobTitle": "Full Stack Developer & UI/UX Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <ThemeColorMeta />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
