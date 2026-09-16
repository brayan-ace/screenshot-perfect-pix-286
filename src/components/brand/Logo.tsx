import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  title?: string;
};

/**
 * Moungo Fish Farm logo mark — a stylised fish in a circular water emblem.
 * Uses brand colors (primary teal + accent green) for a vibrant, recognisable mark.
 * Falls back to currentColor for monochrome contexts.
 */
export function LogoMark({ className, title = "Moungo Fish Farm" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      role="img"
      aria-label={title}
      className={cn("h-10 w-10", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle — water ring */}
      <circle
        cx="28"
        cy="28"
        r="26"
        stroke="var(--color-primary)"
        strokeWidth="1.8"
        opacity="0.35"
      />

      {/* Inner gradient circle bg */}
      <circle cx="28" cy="28" r="22" fill="var(--color-primary)" opacity="0.08" />

      {/* Fish body — elegant streamlined form */}
      <path
        d="M12 28c5-8.5 16-10.5 22-4.5 1.6 1.6 2.8 3.5 3.4 5-.6 1.5-1.8 3.4-3.4 5-6 6-17 4-22-4.5Z"
        fill="var(--color-primary)"
        opacity="0.16"
      />
      <path
        d="M12 28c5-8.5 16-10.5 22-4.5 1.6 1.6 2.8 3.5 3.4 5-.6 1.5-1.8 3.4-3.4 5-6 6-17 4-22-4.5Z"
        stroke="var(--color-primary)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Tail fin — sun-gold shimmer */}
      <path
        d="M37.4 28.5c1.4-2.2 3.2-3.8 5.2-4.6v9.4c-2-.8-3.8-2.5-5.2-4.8Z"
        fill="var(--color-accent)"
        opacity="0.9"
      />

      {/* Fish eye */}
      <circle cx="30" cy="25.5" r="2" fill="var(--color-primary)" />
      <circle cx="30.4" cy="25.1" r="0.7" fill="#FFFFFF" />

      {/* Gill line */}
      <path
        d="M25 22c-.5 3.5-.5 7 0 11"
        stroke="var(--color-primary)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Dorsal fin accent — sun-gold shimmer */}
      <path
        d="M22 19.5c3-3.5 7-4.5 10-3"
        stroke="var(--color-accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Bottom water wave 1 */}
      <path
        d="M10 42c3.2 1.6 6.4 1.6 9.6 0s6.4-1.6 9.6 0 6.4 1.6 9.6 0"
        stroke="var(--color-primary)"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Bottom water wave 2 */}
      <path
        d="M14 46c2.6 1.2 5.2 1.2 7.8 0s5.2-1.2 7.8 0"
        stroke="var(--color-secondary)"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Top bubbles with sunlight reflections */}
      <circle cx="17" cy="13" r="1.2" fill="var(--color-primary)" opacity="0.35" />
      <circle cx="22" cy="10.5" r="0.9" fill="var(--color-accent)" opacity="0.8" />
      <circle cx="14" cy="10" r="0.6" fill="var(--color-primary)" opacity="0.25" />
    </svg>
  );
}

/** Horizontal lockup: symbol + wordmark. Uses brand colours. */
export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-current", className)}>
      <LogoMark className={compact ? "h-8 w-8" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display tracking-[0.02em] font-medium",
            compact ? "text-base" : "text-lg sm:text-xl",
          )}
        >
          <span className="text-primary">Moungo</span>
        </span>
        <span className="label-tech mt-1 text-[0.6rem] tracking-[0.28em] text-muted-foreground">
          Fish Farm
        </span>
      </span>
    </span>
  );
}
