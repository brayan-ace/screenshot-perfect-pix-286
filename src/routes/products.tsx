import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ArrowLink, SectionLabel } from "@/components/editorial";
import { AvailabilitySection } from "@/components/sections/CommerceSections";
import { productCategories, species } from "@/data/products";
import { images } from "@/data/assets";
import { useReveal } from "@/hooks/useReveal";

const title = "Products — Fingerlings, Fish, Feed | Moungo Fish Farm";
const description =
  "Tilapia and catfish fingerlings, table-size fish, feed and aquaculture inputs, and farm support from Moungo Fish Farm in Cameroon.";

export const Route = createFileRoute("/products")({
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
  component: ProductsPage,
});

function ProductsPage() {
  useReveal();

  return (
    <>
      <SiteHeader />
      <main>
        <header className="relative h-[60vh] min-h-80 overflow-hidden">
          <img
            src={images.tableSizeTilapia.src}
            alt={images.tableSizeTilapia.alt}
            width={images.tableSizeTilapia.width}
            height={images.tableSizeTilapia.height}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.033_235)_4%,oklch(0.13_0.028_238/0.5))]" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-10">
            <div className="mx-auto max-w-7xl">
              <SectionLabel>MFF / Products / 001</SectionLabel>
              <h1 className="display-xl mt-5">
                From the farm
                <br />
                to your operation.
              </h1>
            </div>
          </div>
        </header>

        <section className="bg-background px-5 py-20 sm:px-10">
          <div className="mx-auto max-w-7xl space-y-px bg-border">
            {productCategories.map((cat, i) => (
              <article
                key={cat.index}
                className="reveal img-zoom grid gap-8 bg-background py-10 sm:grid-cols-[1fr_1.2fr] sm:items-center"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="h-64 overflow-hidden sm:h-96">
                  <img
                    src={cat.image.src}
                    alt={cat.image.alt}
                    width={cat.image.width}
                    height={cat.image.height}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="sm:pl-4">
                  <span className="label-tech text-primary">
                    {cat.index} — {cat.audience}
                  </span>
                  <h2 className="display-md mt-4">{cat.title}</h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {cat.points.map((p) => (
                      <li key={p} className="label-tech text-muted-foreground">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <ArrowLink to="/contact" variant="outline" className="mt-7">
                    Inquire
                  </ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-light px-5 py-20 text-light-foreground sm:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel className="text-light-muted">Species</SectionLabel>
            <h2 className="display-lg mt-5">Built around the fish.</h2>
            <ul className="mt-12 grid gap-px bg-light-border sm:grid-cols-2 lg:grid-cols-4">
              {species.map((s) => (
                <li key={s.name} className="reveal bg-light p-6">
                  <span className="label-tech text-light-muted">{s.index}</span>
                  <h3 className="font-display mt-3 text-2xl">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-light-muted">
                    {s.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AvailabilitySection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
