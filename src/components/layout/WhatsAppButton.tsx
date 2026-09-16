import { Link } from "@tanstack/react-router";
import { contactConfig } from "@/data/site";

function WhatsAppGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.33 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.69 8.22-8.23 8.22Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.26 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

/**
 * Floating WhatsApp action. Uses the single number in contactConfig.
 * Falls back to the contact page while the number is unverified.
 */
export function WhatsAppButton() {
  const label = "Chat with the farm";
  const classes =
    "fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-surface/90 px-4 py-3 text-xs font-medium tracking-wide text-accent shadow-lg backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground";

  if (!contactConfig.whatsappHref) {
    return (
      <Link to="/contact" className={classes} aria-label={label}>
        <WhatsAppGlyph />
        <span className="hidden sm:inline">{label}</span>
      </Link>
    );
  }

  return (
    <a
      href={contactConfig.whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      className={classes}
      aria-label={label}
    >
      <WhatsAppGlyph />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
