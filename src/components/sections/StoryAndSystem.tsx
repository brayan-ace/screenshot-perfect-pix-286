import { ArrowLink, SectionLabel } from "@/components/editorial";
import { images } from "@/data/assets";
import { species } from "@/data/products";

const timeline = [
  {
    step: "Early days",
    copy: "A small operation on the water, learning what the river allows and what it refuses.",
  },
  {
    step: "Experimentation",
    copy: "Feeding, stocking, handling. Every cycle answered one question and asked another.",
  },
  {
    step: "Growth",
    copy: "More water, more fish, more discipline in the daily routine of the farm.",
  },
  {
    step: "Floating cages",
    copy: "Production moved onto the river, where cages sit in moving water.",
  },
  {
    step: "Farmer development",
    copy: "Students and young farmers arrive to learn the work with their hands in it.",
  },
  {
    step: "Aquaculture future",
    copy: "A farm that also builds farms. The work continues. [CONFIRM CURRENT SCALE]",
  },
];

const pillars = [
  {
    index: "01",
    title: "Fingerlings",
    copy: "Every cycle begins with young fish. Healthy stock sets the ceiling for everything after it.",
    image: images.fingerlings,
    to: "/products",
  },
  {
    index: "02",
    title: "Grow-out",
    copy: "Fish raised to market size in cages and ponds, checked and fed on a steady rhythm.",
    image: images.floatingCage,
    to: "/products",
  },
  {
    index: "03",
    title: "Farm inputs",
    copy: "Feed and the practical inputs a working fish farm depends on week after week.",
    image: images.harvest,
    to: "/products",
  },
  {
    index: "04",
    title: "Knowledge & support",
    copy: "Training, consulting and support for people building or improving a farm.",
    image: images.training,
    to: "/training",
  },
];

const cageConcepts = [
  {
    index: "01",
    title: "Water quality",
    copy: "Healthy production begins with disciplined water management.",
  },
  {
    index: "02",
    title: "Stocking",
    copy: "Stocking density influences growth, health and farm performance.",
  },
  {
    index: "03",
    title: "Feeding",
    copy: "Feed management is central to consistent growth.",
  },
  {
    index: "04",
    title: "Biosecurity",
    copy: "Careful handling and clean equipment reduce risk across a cycle.",
  },
  {
    index: "05",
    title: "Growth",
    copy: "Growth is measured, not assumed. Records turn experience into method.",
  },
];

export function StorySection() {
  return (
    <section id="story" className="scroll-mt-24 bg-light text-light-foreground">
      <div className="relative h-[52vh] min-h-72 w-full overflow-hidden sm:h-[68vh]">
        <img
          src={images.mungoRiver.src}
          alt={images.mungoRiver.alt}
          width={images.mungoRiver.width}
          height={images.mungoRiver.height}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.13_0.028_238/0.4),oklch(0.965_0.011_92)_98%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-10">
        <div className="reveal grid gap-8 border-b border-light-border pb-14 md:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel index="01" className="text-light-muted">
              Our story
            </SectionLabel>
            <h2 className="display-lg mt-6">
              From two cages
              <br />
              to a growing vision.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 text-base leading-relaxed text-light-muted">
            <p>
              Moungo Fish Farm began on the water near the Mungo, with a small operation and a
              lot of questions. Fish farming rewards patience: what works in one cycle has to be
              proven again in the next.
            </p>
            <p>
              The farm has grown from those beginnings toward a larger floating-cage operation,
              and toward training the young farmers who come to learn the work.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid gap-px bg-light-border sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item, i) => (
            <li
              key={item.step}
              className="reveal bg-light p-7"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="label-tech text-light-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-2xl">{item.step}</h3>
              <p className="mt-3 text-sm leading-relaxed text-light-muted">{item.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EcosystemSection() {
  return (
    <section id="aquaculture" className="scroll-mt-24 bg-background px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <SectionLabel index="02">The ecosystem</SectionLabel>
          <h2 className="display-lg mt-6">More than a farm.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            An aquaculture ecosystem built around production, knowledge and people.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.index}
              className="reveal img-zoom group relative overflow-hidden bg-background"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative h-72 overflow-hidden sm:h-96">
                <img
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  width={pillar.image.width}
                  height={pillar.image.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.13_0.028_238/0.92),oklch(0.13_0.028_238/0.15))]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="label-tech text-primary">{pillar.index}</span>
                <h3 className="font-display mt-3 text-3xl">{pillar.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/75">
                  {pillar.copy}
                </p>
                <ArrowLink to={pillar.to} className="mt-5">
                  Learn more
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpeciesSection() {
  return (
    <section className="bg-surface px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="03">Species</SectionLabel>
            <h2 className="display-lg mt-6">Built around the fish.</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Two species carry the farm. Varieties listed in the company's public material are
            included here for confirmation.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {species.map((s, i) => (
            <article
              key={s.name}
              className="reveal img-zoom bg-surface"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={s.image.src}
                  alt={s.image.alt}
                  width={s.image.width}
                  height={s.image.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="label-tech text-primary">{s.index}</span>
                <h3 className="font-display mt-3 text-2xl">{s.name}</h3>
                {s.latin ? (
                  <p className="mt-1 text-xs italic text-muted-foreground">{s.latin}</p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <p className="mt-3 text-xs text-muted-foreground/80">{s.context}</p>
                <ArrowLink to="/products" className="mt-5">
                  See products
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CagesSection() {
  return (
    <section className="relative bg-background">
      <div className="relative h-[60vh] min-h-80 overflow-hidden">
        <img
          src={images.floatingCage.src}
          alt={images.floatingCage.alt}
          width={images.floatingCage.width}
          height={images.floatingCage.height}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.13_0.028_238/0.55),oklch(0.16_0.033_235)_96%)]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 sm:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel index="04">Inside the cages</SectionLabel>
            <h2 className="display-lg mt-5">
              Where water
              <br />
              meets science.
            </h2>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-10">
        <ol className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {cageConcepts.map((c, i) => (
            <li
              key={c.index}
              className="reveal bg-background p-6"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="label-tech text-primary">{c.index}</span>
              <h3 className="font-display mt-4 text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-xs text-muted-foreground/70">
          These are general aquaculture principles, not statements about specific farm
          measurements. [ADD VERIFIED FARM PRACTICE DETAIL]
        </p>
      </div>
    </section>
  );
}
