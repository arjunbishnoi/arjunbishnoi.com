import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata = buildPageMetadata({
  title: "Mobile Apps",
  description: "Mobile Apps, AI & Design",
  index: false,
});

export default function MobileAppsPage() {
  return <ComingSoonPage title="Mobile Apps" subtitle="Cross-platform development" />;
}
