import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLink, SectionLabel } from "@/components/editorial";
import { FacebookIcon, LinkedInIcon } from "@/components/brand/SocialIcons";
import { contactConfig, socialConfig } from "@/data/site";

/* ─────────────────────────────────── SVG Icons ─────────────────────────────── */

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.33 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.69 8.22-8.23 8.22Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.26 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}


function ExternalLinkIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

/* ─────────────────────── Animated Counter Component ──────────────────────── */

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.round(eased * value);
            setDisplay(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ─────────────────────────── Contact Card Component ─────────────────────── */

function ContactCard({
  icon,
  label,
  value,
  href,
  action,
  delay = 0,
  accent = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  action: string;
  delay?: number;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("tel:") || href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer noopener"
      id={`contact-card-${label.toLowerCase().replace(/\s+/g, "-")}`}
      className={`reveal group relative flex flex-col gap-5 overflow-hidden rounded-sm border p-7 transition-all duration-500 sm:p-8 ${
        accent
          ? "border-accent/30 bg-accent/[0.06] hover:border-accent/60 hover:bg-accent/[0.1]"
          : "border-border bg-surface-elevated/50 hover:border-primary/40 hover:bg-surface-elevated"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 ${
          accent ? "bg-accent/20" : "bg-primary/15"
        }`}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-sm ${
            accent
              ? "bg-accent/15 text-accent"
              : "bg-primary/10 text-primary"
          }`}
        >
          {icon}
        </div>
        <ExternalLinkIcon
          className={`h-4 w-4 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-60 ${
            accent ? "text-accent" : "text-primary"
          }`}
        />
      </div>

      <div className="relative">
        <span className="label-tech text-muted-foreground">{label}</span>
        <p className="mt-2 text-lg font-medium leading-snug text-foreground/90 sm:text-xl">
          {value}
        </p>
      </div>

      <span
        className={`mt-auto inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors ${
          accent
            ? "text-accent group-hover:text-accent"
            : "text-primary group-hover:text-foreground"
        }`}
      >
        {action}
        <span className="arrow inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </a>
  );
}

/* ───────────────────────────── Stat Pill Component ───────────────────────── */

function StatPill({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="reveal flex flex-col items-center gap-1 text-center">
      <span className="text-3xl font-light tracking-tight text-primary sm:text-4xl font-display">
        <AnimatedNumber value={value} suffix={suffix} />
      </span>
      <span className="label-tech text-muted-foreground">{label}</span>
    </div>
  );
}

/* ──────────────────── Social Link Pill ──────────────────── */

function SocialPill({ label, href, icon }: { label: string; href: string; icon: string }) {
  const isFb = icon === "facebook";
  const isLi = icon === "linkedin";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      id={`social-link-${icon}`}
      aria-label={`${label} - Moungo Fish Farm`}
      className={`group relative inline-flex items-center gap-3.5 rounded-2xl border bg-surface/90 px-5 py-3 text-sm backdrop-blur transition-all duration-300 hover:scale-[1.03] ${
        isFb
          ? "border-border hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10 hover:shadow-[0_4px_24px_rgba(24,119,242,0.25)]"
          : "border-border hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_4px_24px_rgba(10,102,194,0.25)]"
      }`}
    >
      <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {isFb ? (
          <FacebookIcon className="h-8 w-8 drop-shadow-sm sm:h-9 sm:w-9" />
        ) : isLi ? (
          <LinkedInIcon className="h-8 w-8 drop-shadow-sm sm:h-9 sm:w-9" />
        ) : null}
      </span>
      <div className="flex flex-col text-left">
        <span className="font-semibold leading-snug text-foreground group-hover:text-foreground">
          {label}
        </span>
        <span className="text-xs text-muted-foreground">
          {isFb ? "@Mungofishfarm" : "moungo-fish-farm"}
        </span>
      </div>
      <ExternalLinkIcon className="ml-1 h-4 w-4 text-muted-foreground opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground group-hover:opacity-100" />
    </a>
  );
}

/* ═══════════════════════════════ MAIN SECTION ═══════════════════════════════ */

export function ContactSection({
  withMap = true,
  withHeading = true,
}: {
  withMap?: boolean;
  withHeading?: boolean;
}) {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* ── Heading block ── */}
        {withHeading && (
          <div className="reveal max-w-3xl">
            <SectionLabel index="12">Contact</SectionLabel>
            <h2 className="display-lg mt-6">
              Let's build
              <br />
              something that grows.
            </h2>
          </div>
        )}

        <div className="reveal mt-4 max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you're looking for fingerlings, table-size fish, feed and inputs, or farm
            support&nbsp;— reach out. We answer plainly.
          </p>
        </div>

        {/* ── Contact cards grid ── */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<WhatsAppIcon className="h-5 w-5" />}
            label="WhatsApp"
            value={contactConfig.whatsapp}
            href={contactConfig.whatsappHref}
            action="Open chat"
            delay={0}
            accent
          />
          <ContactCard
            icon={<PhoneIcon className="h-5 w-5" />}
            label="Phone"
            value={contactConfig.phone}
            href={contactConfig.phoneHref}
            action="Call now"
            delay={80}
          />
          <ContactCard
            icon={<MailIcon className="h-5 w-5" />}
            label="Email"
            value={contactConfig.email}
            href={contactConfig.emailHref}
            action="Send email"
            delay={160}
          />
          <ContactCard
            icon={<MapPinIcon className="h-5 w-5" />}
            label="Visit the farm"
            value={contactConfig.address.join(", ")}
            href={contactConfig.mapShareUrl}
            action="Open directions"
            delay={240}
          />
        </div>

        {/* ── Business hours + social ── */}
        <div className="reveal mt-12 flex flex-col gap-8 rounded-sm border border-border bg-background/40 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ClockIcon className="h-4 w-4" />
            </div>
            <div>
              <span className="label-tech text-muted-foreground">Opening hours</span>
              <p className="mt-1 text-sm font-medium text-foreground/90">
                {contactConfig.hours}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialConfig.map((s) => (
              <SocialPill key={s.label} label={s.label} href={s.href} icon={s.icon} />
            ))}
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-b border-border py-10 sm:grid-cols-4 sm:gap-4">
          <StatPill value={5} suffix="+" label="Years farming" />
          <StatPill value={3000} suffix="+" label="Fish monthly" />
          <StatPill value={200} suffix="+" label="Farmers trained" />
          <StatPill value={24} suffix="h" label="Response time" />
        </div>

        {/* ── Map section ── */}
        {withMap && (
          <div className="reveal mt-14">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="label-tech text-muted-foreground">MFF / Location / 001</span>
                <h3 className="display-md mt-2">Mungo Bridge, Cameroon</h3>
              </div>
              <ArrowLink href={contactConfig.mapShareUrl}>
                Open in Google Maps
              </ArrowLink>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-border">
              {contactConfig.mapEmbedUrl ? (
                <iframe
                  title="Moungo Fish Farm location"
                  src={contactConfig.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full sm:h-[420px]"
                  style={{
                    filter: "saturate(0.7) contrast(1.1) brightness(0.85)",
                  }}
                />
              ) : (
                <div className="flex h-80 items-center justify-center bg-background/40 px-6 text-center sm:h-[420px]">
                  <div className="max-w-sm">
                    <MapPinIcon className="mx-auto h-10 w-10 text-muted-foreground/40" />
                    <p className="mt-4 text-sm text-muted-foreground">
                      Map embed loading — use the link above to view our location on Google Maps.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
