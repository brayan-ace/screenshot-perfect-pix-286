import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  title?: string;
};

/**
 * Moungo Fish Farm symbol — a fish body drawn as a leaf, carried by a water
 * current. Uses currentColor, so it works on light, dark and monochrome.
 */
export function LogoMark({ className, title = "Moungo Fish Farm" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={cn("h-9 w-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 23.5C13 12 28.5 10 36 19.5c1.2 1.5 2 3 2.4 4.2-.4 1.2-1.2 2.7-2.4 4.2C28.5 37.4 13 35.4 5.5 23.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M38.4 23.7c1.6-2.2 3.6-3.9 5.6-4.8v9.9c-2-.9-4-2.7-5.6-5Z"
        fill="currentColor"
      />
      <path
        d="M20.8 12.4c.6 6.2.6 16.6-4.2 22.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="30.8" cy="20.6" r="1.7" fill="currentColor" />
      <path
        d="M3 38.5c4.2 2.2 8.4 2.2 12.6 0s8.4-2.2 12.6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M9 8.2c3.4 1.8 6.8 1.8 10.2 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

/** Horizontal lockup: symbol + wordmark. Inherits colour from its parent. */
export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-current", className)}>
      <LogoMark className={compact ? "h-7 w-7" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display tracking-[0.04em]",
            compact ? "text-base" : "text-lg sm:text-xl",
          )}
        >
          Moungo
        </span>
        <span className="label-tech mt-1 text-[0.58rem] opacity-70">Fish Farm</span>
      </span>
    </span>
  );
}
