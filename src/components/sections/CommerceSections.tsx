import { ArrowLink, SectionLabel } from "@/components/editorial";
import { images } from "@/data/assets";
import { productCategories } from "@/data/products";
import { availability, availabilityUpdatedAt } from "@/data/availability";

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-24 bg-light px-5 py-24 text-light-foreground sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <SectionLabel index="05" className="text-light-muted">
            Products
          </SectionLabel>
          <h2 className="display-lg mt-6">
            From the farm
            <br />
            to your operation.
          </h2>
        </div>

        <div className="mt-14 space-y-px bg-light-border">
          {productCategories.map((cat, i) => (
            <article
              key={cat.index}
              className="reveal img-zoom grid gap-6 bg-light p-6 sm:grid-cols-[180px_1fr_auto] sm:items-center sm:gap-10 sm:p-8"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="h-40 overflow-hidden sm:h-44">
                <img
                  src={cat.image.src}
                  alt={cat.image.alt}
                  width={cat.image.width}
                  height={cat.image.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="label-tech text-light-muted">
                  {cat.index} — {cat.audience}
                </span>
                <h3 className="font-display mt-3 text-3xl">{cat.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-light-muted">
                  {cat.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {cat.points.map((p) => (
                    <li key={p} className="label-tech text-light-muted">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <ArrowLink to="/products" className="text-light-foreground hover:text-light-muted">
                View
              </ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HarvestSection() {
  return (
    <section className="relative">
      <div className="relative h-[85vh] min-h-96 overflow-hidden">
        <img
          src={images.harvest.src}
          alt={images.harvest.alt}
          width={images.harvest.width}
          height={images.harvest.height}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.13_0.028_238/0.95),oklch(0.13_0.028_238/0.2)_60%)]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-16 sm:px-10">
          <div className="reveal mx-auto max-w-7xl">
            <SectionLabel index="06">The harvest</SectionLabel>
            <h2 className="display-xl mt-5">
              From water
              <br />
              to table.
            </h2>
            <p className="mt-6 max-w-md text-base text-foreground/80">
              Freshness begins long before the market.
            </p>
            <ArrowLink to="/products" variant="outline" className="mt-8">
              Explore products
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AvailabilitySection() {
  const hasItems = availability.length > 0;

  return (
    <section className="bg-surface px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="07">Fresh from the farm</SectionLabel>
            <h2 className="display-md mt-5">Current availability.</h2>
          </div>
          <p className="label-tech text-muted-foreground">Updated {availabilityUpdatedAt}</p>
        </div>

        {hasItems ? (
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {availability.map((item) => (
              <li key={item.product} className="reveal bg-surface p-7">
                <span className="label-tech text-primary">{item.status}</span>
                <h3 className="font-display mt-3 text-2xl">{item.product}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
                <p className="label-tech mt-4 text-muted-foreground/70">{item.updated}</p>
                <ArrowLink to="/contact" className="mt-5">
                  Order / inquire
                </ArrowLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="reveal mt-10 flex flex-col gap-6 border border-border p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-base text-muted-foreground">
              Availability changes with the cycle. Get in touch and we will confirm what is ready
              now.
            </p>
            <ArrowLink to="/contact" variant="solid">
              Check current availability
            </ArrowLink>
          </div>
        )}
      </div>
    </section>
  );
}
