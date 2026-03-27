import { Footer } from "@/components/layout/Footer";

type ComingSoonPageProps = {
  title: string;
  subtitle: string;
  description?: string;
};

export function ComingSoonPage({
  title,
  subtitle,
  description = "Coming soon.",
}: ComingSoonPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            {title}
            <span className="block text-xl text-primary mt-2">{subtitle}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{description}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
