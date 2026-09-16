import { ArrowLink, SectionLabel } from "@/components/editorial";
import { images } from "@/data/assets";
import { journalEntries } from "@/data/journal";

const impactThemes = [
  {
    index: "01",
    title: "Food security",
    copy: "Fish is protein that people can buy, cook and share. Local production shortens the distance between water and plate.",
  },
  {
    index: "02",
    title: "Local production",
    copy: "Fish farmed here keeps value in the region instead of importing it from somewhere else.",
  },
  {
    index: "03",
    title: "Youth opportunity",
    copy: "Aquaculture is work young people can learn, practise and build a living from.",
  },
  {
    index: "04",
    title: "Knowledge",
    copy: "Knowledge belongs on the farm, not only in the classroom.",
  },
];

export function TrainingSection() {
  return (
    <section id="training" className="scroll-mt-24 bg-background px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="reveal">
            <SectionLabel index="08">Training</SectionLabel>
            <h2 className="display-lg mt-6">
              Learning with
              <br />
              hands in the water.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Students, young farmers and farm workers learn the work where it happens: at the
              cages, with feed, nets and records. Knowledge becomes valuable when it leaves the
              classroom and enters the farm.
            </p>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground/70">
              Trainees to date: [CONFIRM CURRENT NUMBER]
            </p>
            <ArrowLink to="/training" variant="outline" className="mt-8">
              Learn about training
            </ArrowLink>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            <div className="img-zoom col-span-2 h-56 overflow-hidden sm:h-72">
              <img
                src={images.training.src}
                alt={images.training.alt}
                width={images.training.width}
                height={images.training.height}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-zoom -mt-10 h-52 overflow-hidden sm:h-64">
              <img
                src={images.farmTeam.src}
                alt={images.farmTeam.alt}
                width={images.farmTeam.width}
                height={images.farmTeam.height}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-zoom h-52 overflow-hidden sm:h-64">
              <img
                src={images.fingerlings.src}
                alt={images.fingerlings.alt}
                width={images.fingerlings.width}
                height={images.fingerlings.height}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section id="impact" className="scroll-mt-24 bg-light px-5 py-24 text-light-foreground sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <SectionLabel index="09" className="text-light-muted">
            Impact
          </SectionLabel>
          <h2 className="display-lg mt-6">Why aquaculture matters.</h2>
        </div>

        <ul className="mt-14 grid gap-px bg-light-border sm:grid-cols-2 lg:grid-cols-4">
          {impactThemes.map((t, i) => (
            <li
              key={t.index}
              className="reveal bg-light p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="label-tech text-light-muted">{t.index}</span>
              <h3 className="font-display mt-4 text-2xl">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-light-muted">{t.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function JournalSection() {
  return (
    <section id="journal" className="scroll-mt-24 bg-background px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="10">Journal</SectionLabel>
            <h2 className="display-lg mt-6">Notes from the water.</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Writing on aquaculture, farm life, training and harvest. Entries are placeholders
            until the first pieces are published.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {journalEntries.map((entry, i) => (
            <article
              key={i}
              className="reveal bg-background p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="label-tech text-primary">{entry.category}</span>
                <span className="label-tech text-muted-foreground/70">{entry.date}</span>
              </div>
              <h3 className="font-display mt-5 text-2xl leading-snug">{entry.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {entry.excerpt}
              </p>
              <div className="mt-6 h-px w-full bg-border" />
              <p className="label-tech mt-4 text-muted-foreground/60">Coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FutureSection() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-32 sm:px-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 100%, oklch(0.3 0.06 200 / 0.55) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <SectionLabel index="11" className="justify-center">
          The future
        </SectionLabel>
        <h2 className="display-xl mt-8">
          The future
          <br />
          is growing.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
          From the waters of the Mungo to the wider African aquaculture ecosystem, the journey
          continues.
        </p>
        <div className="mt-10 flex justify-center">
          <ArrowLink to="/contact" variant="solid">
            Start a conversation
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
