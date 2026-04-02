import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata = buildPageMetadata({
  title: "AI",
  description: "Mobile Apps, AI & Design",
  index: false,
});

export default function AIEngineeringPage() {
  return <ComingSoonPage title="AI Engineering" subtitle="Intelligent applications" />;
}
