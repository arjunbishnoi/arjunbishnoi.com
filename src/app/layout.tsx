import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColorMeta } from "@/components/ThemeColorMeta";
import { Header } from "@/components/layout/Header";
import { PageLoadFadeIn } from "@/components/layout/PageLoadFadeIn";
import { getThemeInitScript } from "@/lib/theme";
import { rootMetadata, websiteJsonLd } from "@/lib/site-metadata";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export async function generateMetadata(): Promise<Metadata> {
  return rootMetadata;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = getThemeInitScript();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider>
          <ThemeColorMeta />
          <Header />
          <PageLoadFadeIn>{children}</PageLoadFadeIn>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
