import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ArrowLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  arrowSize?: string
  external?: boolean
}

/**
 * A styled link with a ↗ arrow icon that brightens on hover.
 * Use `external` for links that open in a new tab.
 */
export function ArrowLink({
  href,
  children,
  className,
  arrowSize = "w-3.5 h-3.5",
  external = false,
}: ArrowLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-0.5 hover:text-foreground transition-colors group",
    className
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ArrowUpRight
          className={cn(
            arrowSize,
            "opacity-50 group-hover:opacity-100 transition-opacity"
          )}
        />
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowUpRight
        className={cn(
          arrowSize,
          "opacity-50 group-hover:opacity-100 transition-opacity"
        )}
      />
    </Link>
  )
}
