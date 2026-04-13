import { Footer } from "@/components/layout/Footer";
import { BlogDirectory } from "@/components/blog/BlogDirectory";
import {
  LANDING_HERO_STACK_CLASSNAME,
  LANDING_SECTION_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  path: "/blog",
  description: "Writing on mobile apps, AI, and design.",
  keywords: ["Blog", "Mobile Apps", "AI", "Design", "Product Engineering"],
  includeSocial: true,
});

export default function BlogPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <div className="flex-1 px-6 pb-24 pt-28 lg:pt-36 xl:pt-40">
        <div className="mx-auto w-full max-w-[1040px] px-4 lg:px-6">
          <div className={LANDING_HERO_STACK_CLASSNAME}>
            <h1 className={LANDING_SECTION_TITLE_CLASSNAME}>
              <span className="inline">Blog</span>
            </h1>
          </div>
        </div>

        <BlogDirectory />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
