import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionLabel } from "@/components/editorial";
import { ContactSection } from "@/components/sections/ContactSection";
import { images } from "@/data/assets";
import { contactConfig } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

const title = "Contact Moungo Fish Farm | Mungo, Cameroon";
const description =
  "Talk to Moungo Fish Farm about fingerlings, table-size tilapia and catfish, feed and inputs, farm support or training. Based at the Mungo, Cameroon.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Cinematic Hero ── */}
        <header className="relative h-[60vh] min-h-80 overflow-hidden sm:h-[65vh]">
          {/* Background image */}
          <img
            src={images.mungoRiver.src}
            alt={images.mungoRiver.alt}
            width={images.mungoRiver.width}
            height={images.mungoRiver.height}
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{
              objectPosition: "center 35%",
            }}
          />

          {/* Layered gradients for depth — rich dark aquatic gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.2 0.036 232) 4%, oklch(0.13 0.028 238 / 0.65) 55%, oklch(0.11 0.025 240 / 0.85) 100%)",
            }}
          />

          {/* Grain overlay */}
          <div className="grain-overlay absolute inset-0" aria-hidden="true" />

          {/* Hero content */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-14 sm:px-10 sm:pb-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <SectionLabel>MFF / Contact / 001</SectionLabel>

                <h1 className="display-xl mt-5 text-foreground">
                  Let's build
                  <br />
                  something that grows.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                  From the banks of the Mungo to your doorstep — we're here to
                  help with fish, feed, training, or anything aquaculture.
                </p>

                {/* Quick contact strip */}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={contactConfig.whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-sm font-semibold text-primary backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.33 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.69 8.22-8.23 8.22Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.26 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
                    </svg>
                    WhatsApp us
                  </a>

                  <span className="hidden h-4 w-px bg-foreground/20 sm:block" aria-hidden="true" />

                  <span className="label-tech text-foreground/50">
                    {contactConfig.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Contact section ── */}
        <ContactSection withHeading={false} />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
