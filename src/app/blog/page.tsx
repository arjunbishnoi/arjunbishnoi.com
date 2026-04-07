import { Footer } from "@/components/layout/Footer";
import { BlogDirectory } from "@/components/blog/BlogDirectory";
import {
  HOME_SECTION_TITLE_CLASSNAME,
  HOME_TITLE_SUBTITLE_CLASSNAME,
} from "@/lib/home-title-styles";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  path: "/blog",
  description: "Mobile Apps, AI & Design",
  index: false,
});

export default function BlogPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <div className="flex-1 px-6 pb-24 pt-28 lg:pt-36 xl:pt-40">
        <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center px-4 text-center lg:px-6">
          <h1 className={HOME_SECTION_TITLE_CLASSNAME}>
            <span className="inline">Blog</span>
          </h1>
          <p className={HOME_TITLE_SUBTITLE_CLASSNAME}>
            <span className="block lg:inline">Thoughts and insights.</span>
          </p>
        </div>

        <BlogDirectory />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
