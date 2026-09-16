import { ArrowLink, SectionLabel } from "@/components/editorial";
import { contactConfig } from "@/data/site";

const channels = [
  { key: "call", label: "Call", value: contactConfig.phone, href: contactConfig.phoneHref },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: contactConfig.whatsapp,
    href: contactConfig.whatsappHref,
  },
  { key: "email", label: "Email", value: contactConfig.email, href: contactConfig.emailHref },
  {
    key: "visit",
    label: "Visit the farm",
    value: contactConfig.address.join(", "),
    href: "",
  },
];

export function ContactSection({ withMap = true }: { withMap?: boolean }) {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <SectionLabel index="12">Contact</SectionLabel>
          <h2 className="display-lg mt-6">
            Let's build
            <br />
            something that grows.
          </h2>
          <p className="mt-6 max-w-lg text-base text-muted-foreground">
            Fingerlings, table-size fish, feed or farm support — tell us what you need and we
            will answer plainly.
          </p>
        </div>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <li
              key={c.key}
              className="reveal bg-surface p-7"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="label-tech text-primary">{c.label}</span>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">{c.value}</p>
              {c.href ? (
                <ArrowLink href={c.href} className="mt-5">
                  Open
                </ArrowLink>
              ) : (
                <p className="label-tech mt-5 text-muted-foreground/60">To be confirmed</p>
              )}
            </li>
          ))}
        </ul>

        {withMap ? (
          <div className="reveal mt-14">
            <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="display-md">Mungo Bridge, Cameroon</h3>
              <p className="label-tech text-muted-foreground">MFF / Location / 001</p>
            </div>
            {contactConfig.mapEmbedUrl ? (
              <iframe
                title="Moungo Fish Farm location"
                src={contactConfig.mapEmbedUrl}
                loading="lazy"
                className="mt-6 h-80 w-full border border-border"
              />
            ) : (
              <div className="mt-6 flex h-64 items-center justify-center border border-dashed border-border bg-background/40 px-6 text-center sm:h-80">
                <p className="max-w-sm text-sm text-muted-foreground">
                  Map placeholder — [VERIFY EXACT LOCATION]. Add the confirmed Google Maps embed
                  and it appears here.
                </p>
              </div>
            )}
          </div>
        ) : null}

        <p className="mt-10 max-w-2xl text-xs text-muted-foreground/70">
          Contact details shown as [VERIFY …] have not been confirmed with the farm yet.
        </p>
      </div>
    </section>
  );
}
