import { Footer } from "@/components/layout/Footer";
import { buildPageMetadata } from "@/lib/site-metadata";
import { socialLinks } from "@/lib/content/social-links";
import {
  LANDING_HERO_STACK_CLASSNAME,
  LANDING_SECTION_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";

export const metadata = buildPageMetadata({
  title: "Resume",
  path: "/resume",
  description: "View and download the professional resume of Arjun Bishnoi.",
  includeSocial: true,
});

export default function ResumePage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <div className="flex-1 px-6 pb-24 pt-28 lg:pt-36 xl:pt-40">
        <div className="mx-auto w-full max-w-[1040px] px-4 lg:px-6">
          <div className={LANDING_HERO_STACK_CLASSNAME}>
            <h1 className={LANDING_SECTION_TITLE_CLASSNAME}>
              <span className="inline">Resume</span>
            </h1>
            <p className="m-0 w-full max-w-[34rem] text-[1rem] font-normal leading-[1.64] tracking-[-0.01em] text-black/84 dark:text-white/82 sm:text-[1.03rem] lg:text-[1.08rem]">
              Access the latest resume in PDF format.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
              <a
                href={socialLinks.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-[0.98rem] font-medium tracking-[-0.01em] text-white transition-transform duration-200 active:scale-[0.98] dark:bg-white dark:text-black"
              >
                View PDF
              </a>
              <a
                href={socialLinks.resumeFile}
                download={socialLinks.resumeDownloadName}
                className="inline-flex h-12 items-center justify-center rounded-full bg-black/5 px-7 text-[0.98rem] font-medium tracking-[-0.01em] text-black transition-transform duration-200 active:scale-[0.98] dark:bg-white/10 dark:text-white"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
