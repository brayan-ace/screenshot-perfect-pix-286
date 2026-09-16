import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label-tech flex items-center gap-3 text-muted-foreground", className)}>
      {index ? <span className="text-primary">{index}</span> : null}
      <span className="h-px w-8 bg-current opacity-40" aria-hidden="true" />
      {children}
    </p>
  );
}

export function ArrowLink({
  to,
  hash,
  href,
  children,
  variant = "ghost",
  className,
}: {
  to?: string;
  hash?: string;
  href?: string;
  children: ReactNode;
  variant?: "ghost" | "solid" | "outline";
  className?: string;
}) {
  const classes = cn(
    "link-arrow inline-flex items-center gap-3 text-sm font-medium tracking-wide transition-colors",
    variant === "ghost" && "text-primary hover:text-foreground",
    variant === "outline" &&
      "border border-current px-6 py-4 text-foreground hover:border-primary hover:text-primary",
    variant === "solid" &&
      "bg-primary px-6 py-4 text-primary-foreground hover:bg-accent hover:text-accent-foreground",
    className,
  );

  const content = (
    <>
      {children}
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
        {content}
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} hash={hash} className={classes}>
      {content}
    </Link>
  );
}

export function Meta({ children }: { children: ReactNode }) {
  return <p className="label-tech text-muted-foreground/70">{children}</p>;
}
