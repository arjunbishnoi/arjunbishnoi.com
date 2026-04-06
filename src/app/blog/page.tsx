import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  path: "/blog",
  description: "Mobile Apps, AI & Design",
  index: false,
});

export default function BlogPage() {
  return <ComingSoonPage title="Blog" subtitle="Thoughts & insights" />;
}
