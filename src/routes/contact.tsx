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
        <header className="relative h-[52vh] min-h-72 overflow-hidden">
          <img
            src={images.mungoRiver.src}
            alt={images.mungoRiver.alt}
            width={images.mungoRiver.width}
            height={images.mungoRiver.height}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.2_0.036_232)_4%,oklch(0.13_0.028_238/0.45))]" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-10">
            <div className="mx-auto max-w-7xl">
              <SectionLabel>MFF / Contact / 001</SectionLabel>
              <h1 className="display-xl mt-5">
                Let's build
                <br />
                something that grows.
              </h1>
              <p className="label-tech mt-6 text-foreground/70">{contactConfig.hours}</p>
            </div>
          </div>
        </header>

        <ContactSection withHeading={false} />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
