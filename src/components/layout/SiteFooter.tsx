import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { contactConfig, navItems, siteConfig, socialConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-5 py-14 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline} Tilapia, catfish, fingerlings and farmer support from the
              Mungo.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="label-tech text-muted-foreground">Navigate</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.index}>
                  <Link
                    to={item.to}
                    hash={item.hash}
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-tech text-muted-foreground">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>{contactConfig.phone}</li>
              <li>{contactConfig.email}</li>
              <li>{contactConfig.address.join(", ")}</li>
            </ul>
            <ul className="mt-5 flex flex-wrap gap-4">
              {socialConfig.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="label-tech text-muted-foreground transition-colors hover:text-primary"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <span className="label-tech text-muted-foreground/60">
                      {s.label} [VERIFY LINK]
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-tech text-muted-foreground">Mungo · Cameroon</p>
          <p className="label-tech text-muted-foreground">
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
