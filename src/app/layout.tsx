import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Arjun Bishnoi <Designer/Developer>",
  description: "Full Stack Developer and UI/UX Designer specializing in Vue.js, Node.js, and modern web technologies.",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "180x180" },
      { url: "/favicon.png", sizes: "152x152" },
      { url: "/favicon.png", sizes: "120x120" },
    ],
    other: [
      {
        rel: "apple-touch-startup-image",
        url: "/favicon.png",
      },
    ],
  },
  openGraph: {
    title: "Arjun Bishnoi - Web & Mobile Designer/Developer",
    description: "Mobile apps, web development, and design. Consistent, hands-on, and always evolving.",
    url: "https://arjunbishnoi.com/",
    siteName: "Arjun Bishnoi",
    images: [
      {
        url: "https://arjunbishnoi.com/arjun-bishnoi-profile.png",
        width: 1200,
        height: 630,
        alt: "Arjun Bishnoi Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Bishnoi - Web & Mobile Designer/Developer",
    description: "Mobile apps, web development, and design. Consistent, hands-on, and always evolving.",
    images: ["https://arjunbishnoi.com/arjun-bishnoi-profile.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Arjun Bishnoi",
    statusBarStyle: "black-translucent",
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
      "url": "https://arjunbishnoi.com",
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
      "image": "https://arjunbishnoi.com/arjun-bishnoi-profile.png",
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
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
