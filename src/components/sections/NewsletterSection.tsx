import { useRef, useState, type FormEvent } from "react";
import { SectionLabel } from "@/components/editorial";
import { images } from "@/data/assets";

/* ─────────────────── SVG Icons ─────────────────── */

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11Z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function FishIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6-3.56 0-7.56-2.54-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1-3.5.07" />
      <path d="M2 9.5 6.5 12 2 14.5" />
      <path d="M16 6.07a9.77 9.77 0 0 1-3.5-.07" />
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z" />
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );
}

/* ─────────────────── Benefit Pill ─────────────────── */

function BenefitPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="reveal flex items-center gap-3 rounded-sm border border-light-border bg-white/60 px-4 py-3 backdrop-blur-sm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-sm font-medium text-light-foreground">{text}</span>
    </div>
  );
}

/* ═══════════════════ NEWSLETTER SECTION ═══════════════════ */

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production, wire this to your email service
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="relative scroll-mt-24 overflow-hidden bg-light px-5 py-24 text-light-foreground sm:px-10 sm:py-32"
    >
      {/* ── Decorative background elements ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 30% 100%, oklch(0.85 0.08 196 / 0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 10%, oklch(0.75 0.06 155 / 0.15) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.3 0.05 220) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* ── Left column: Content + Form ── */}
          <div>
            <div className="reveal">
              <SectionLabel index="10" className="text-light-muted">
                Stay connected
              </SectionLabel>

              <h2 className="display-lg mt-6">
                Subscribe for free
                <br />
                agricultural updates.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-light-muted sm:text-lg">
                Sign up for our newsletter where we share agricultural updates to
                keep you up to date about what is happening in the aquaculture space
                of Cameroon, Africa and the world.
              </p>
            </div>

            {/* ── Email form ── */}
            <div className="reveal mt-10">
              {submitted ? (
                <div className="flex items-center gap-4 rounded-sm border border-accent/30 bg-accent/[0.08] p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon />
                  </span>
                  <div>
                    <p className="font-medium text-light-foreground">
                      You're subscribed!
                    </p>
                    <p className="mt-1 text-sm text-light-muted">
                      We'll send you aquaculture updates — no spam, ever.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <div
                    className={`relative flex-1 rounded-sm border transition-all duration-300 ${
                      focused
                        ? "border-primary/60 shadow-[0_0_0_3px_oklch(0.62_0.086_196/0.12)]"
                        : "border-light-border"
                    }`}
                  >
                    <input
                      ref={inputRef}
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="Enter your email address"
                      id="newsletter-email"
                      className="w-full bg-white/70 px-5 py-4 text-base text-light-foreground placeholder:text-light-muted/50 focus:outline-none sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    id="newsletter-submit"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
                  >
                    Subscribe
                    <SendIcon />
                  </button>
                </form>
              )}

              <p className="mt-3 text-xs text-light-muted/60">
                Free forever · No spam · Unsubscribe anytime
              </p>
            </div>

            {/* ── Benefit pills ── */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <BenefitPill
                icon={<FishIcon />}
                text="Fish farming best practices"
              />
              <BenefitPill
                icon={<TrendingUpIcon />}
                text="Market prices & trends"
              />
              <BenefitPill
                icon={<BookOpenIcon />}
                text="Training announcements"
              />
              <BenefitPill
                icon={<SproutIcon />}
                text="Sustainable aquaculture tips"
              />
            </div>
          </div>

          {/* ── Right column: Image collage ── */}
          <div className="reveal relative hidden lg:block">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-primary/10">
              <img
                src={images.training.src}
                alt={images.training.alt}
                width={images.training.width}
                height={images.training.height}
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.2 0.036 232 / 0.4) 0%, transparent 40%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="label-tech text-white/70">MFF / Updates / 001</span>
                <p className="mt-2 text-lg font-medium text-white">
                  Join 200+ farmers already learning with us.
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-8 rounded-sm border border-accent/20 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <SproutIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-light-foreground">Growing community</p>
                  <p className="text-xs text-light-muted">Cameroon · Africa · World</p>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -right-4 -top-4 rounded-sm border border-primary/20 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-2xl font-light text-primary font-display">100%</p>
              <p className="text-xs font-medium text-light-muted">Free updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
