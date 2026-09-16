import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ArrowLink, SectionLabel } from "@/components/editorial";
import { images } from "@/data/assets";
import { useReveal } from "@/hooks/useReveal";

const title = "Training & Farmer Support | Moungo Fish Farm";
const description =
  "Hands-on aquaculture training and farmer support at Moungo Fish Farm in Cameroon — for students, young farmers and people building their own fish farms.";

export const Route = createFileRoute("/training")({
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
  component: TrainingPage,
});

const modules = [
  {
    index: "01",
    title: "Water first",
    copy: "Reading the water before anything else: temperature, clarity, movement, oxygen.",
  },
  {
    index: "02",
    title: "Stock and handling",
    copy: "Choosing fingerlings, moving fish gently, counting honestly.",
  },
  {
    index: "03",
    title: "Feeding practice",
    copy: "Rations, timing and what wasted feed costs a farm over a cycle.",
  },
  {
    index: "04",
    title: "Records",
    copy: "Simple records that turn one good season into a repeatable method.",
  },
  {
    index: "05",
    title: "Farm setup",
    copy: "Ponds or cages, site choice, and the realistic cost of starting.",
  },
  {
    index: "06",
    title: "Selling the fish",
    copy: "Harvest timing, handling and the practical side of finding buyers.",
  },
];

function TrainingPage() {
  useReveal();

  return (
    <>
      <SiteHeader />
      <main>
        <header className="relative h-[60vh] min-h-80 overflow-hidden">
          <img
            src={images.training.src}
            alt={images.training.alt}
            width={images.training.width}
            height={images.training.height}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.033_235)_4%,oklch(0.13_0.028_238/0.5))]" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-10">
            <div className="mx-auto max-w-7xl">
              <SectionLabel>MFF / Training / 001</SectionLabel>
              <h1 className="display-xl mt-5">
                Knowledge
                <br />
                on the farm.
              </h1>
            </div>
          </div>
        </header>

        <section className="bg-background px-5 py-20 sm:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="reveal">
              <p className="display-md">
                “Knowledge becomes valuable when it leaves the classroom and enters the farm.”
              </p>
            </div>
            <div className="reveal space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Students, young farmers and farm workers learn beside the cages and ponds, doing
                the work rather than watching it. Sessions follow the real rhythm of a
                production cycle.
              </p>
              <p>
                Programme length, intake dates and fees: [CONFIRM TRAINING DETAILS]. Trainees to
                date: [CONFIRM CURRENT NUMBER].
              </p>
              <ArrowLink to="/contact" variant="outline" className="mt-2">
                Ask about the next intake
              </ArrowLink>
            </div>
          </div>
        </section>

        <section className="bg-light px-5 py-20 text-light-foreground sm:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel className="text-light-muted">What is covered</SectionLabel>
            <h2 className="display-lg mt-5">From fingerlings to harvest.</h2>
            <ul className="mt-12 grid gap-px bg-light-border sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((m, i) => (
                <li
                  key={m.index}
                  className="reveal bg-light p-7"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="label-tech text-light-muted">{m.index}</span>
                  <h3 className="font-display mt-4 text-2xl">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-light-muted">{m.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-surface px-5 py-20 sm:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
            {[images.farmTeam, images.fingerlings, images.harvest].map((img) => (
              <div key={img.src} className="img-zoom reveal h-72 overflow-hidden sm:h-96">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
