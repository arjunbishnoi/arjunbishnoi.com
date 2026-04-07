import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

type ComingSoonPageProps = {
  title: string;
  subtitle: string;
  description?: string;
  centered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
};

export function ComingSoonPage({
  title,
  subtitle,
  description = "Coming soon.",
  centered = false,
  titleClassName,
  subtitleClassName,
  containerClassName,
}: ComingSoonPageProps) {
  const resolvedSubtitleClassName =
    subtitleClassName ?? "m-0 mt-2 text-xl text-primary";

  return (
    <main className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <div className="flex-1 pt-32 pb-24 px-6">
        <div
          className={cn(
            "mx-auto max-w-7xl",
            centered && "text-center",
            containerClassName,
          )}
        >
          <h1
            className={cn(
              "text-4xl font-bold text-foreground sm:text-5xl",
              titleClassName,
            )}
          >
            {title}
          </h1>
          <p className={resolvedSubtitleClassName}>
            <span className="block lg:inline">{subtitle}</span>
          </p>
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg text-muted-foreground",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
