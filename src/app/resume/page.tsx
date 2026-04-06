import { Download, ExternalLink, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { buildPageMetadata } from "@/lib/site-metadata";
import { siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/content/social-links";

const resumeDescription =
  "Download the latest resume of Arjun Bishnoi, a developer and designer focused on mobile apps, AI systems, and product design.";

export const metadata = buildPageMetadata({
  title: "Resume",
  path: "/resume",
  description: resumeDescription,
  includeSocial: true,
  imageUrl: siteConfig.images.headshot,
});

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Resume - Arjun Bishnoi",
  description: resumeDescription,
  url: `${siteConfig.url}/resume`,
  mainEntity: {
    "@type": "CreativeWork",
    name: "Arjun Bishnoi Resume",
    url: `${siteConfig.url}${socialLinks.resumeFile}`,
    encodingFormat: "application/pdf",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
};

const resumeHighlights = [
  "Cross-platform mobile app development",
  "Applied AI product engineering",
  "UI/UX design and frontend systems",
] as const;

export default function ResumePage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-background text-foreground pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />

      <div className="flex-1">
        <section className="relative overflow-hidden pb-16 pt-10 md:pb-20 lg:pb-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_34%)]" />

          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
                <FileText className="h-4 w-4" strokeWidth={1.8} />
                Latest PDF resume
              </div>

              <h1 className="mt-6 font-sans text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                Resume
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                View or download the latest resume of Arjun Bishnoi. This page exists as the canonical
                resume URL for search engines, while the PDF remains available for direct download.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_24rem]">
              <div className="rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur md:p-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={socialLinks.resumeFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Open PDF
                    <ExternalLink className="h-4 w-4" strokeWidth={2} />
                  </a>

                  <a
                    href={socialLinks.resumeFile}
                    download={socialLinks.resumeDownloadName}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/40"
                  >
                    Download PDF
                    <Download className="h-4 w-4" strokeWidth={2} />
                  </a>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/40"
                  >
                    Contact
                    <Mail className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-border/60 bg-background/90 p-5">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Focus Areas
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {resumeHighlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-border/70 bg-accent/30 px-4 py-2 text-sm text-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur md:p-7">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Search Preview
                </p>
                <div className="mt-4 space-y-3">
                  <p className="text-lg font-medium text-foreground">Resume - Arjun Bishnoi</p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-400">
                    {siteConfig.url}/resume
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">{resumeDescription}</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
