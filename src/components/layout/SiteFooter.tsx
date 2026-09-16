import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { FacebookIcon, LinkedInIcon } from "@/components/brand/SocialIcons";
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
                    {...(item.hash ? { hash: item.hash } : {})}
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
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://web.facebook.com/Mungofishfarm/?_rdc=1&_rdr#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook (Moungo Fish Farm)"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/70 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10 hover:shadow-[0_0_20px_rgba(24,119,242,0.35)]"
                title="Follow Moungo Fish Farm on Facebook"
              >
                <FacebookIcon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://cm.linkedin.com/company/moungo-fish-farm"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (Moungo Fish Farm)"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/70 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_20px_rgba(10,102,194,0.35)]"
                title="Connect with Moungo Fish Farm on LinkedIn"
              >
                <LinkedInIcon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
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
