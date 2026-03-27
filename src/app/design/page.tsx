import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata = buildPageMetadata({
  title: "Design",
  description: "Mobile Apps, AI & Design",
  index: false,
  path: "/design",
});

export default function UIUXDesignPage() {
  return <ComingSoonPage title="UI/UX Design" subtitle="Pixel-perfect experiences" />;
}
