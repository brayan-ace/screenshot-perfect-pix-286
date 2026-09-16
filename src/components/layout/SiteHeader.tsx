import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { navItems, siteConfig, contactConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  return (
    <div
      id="site-menu"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 bg-background/98 backdrop-blur-xl transition-opacity duration-500",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-5 py-5 sm:px-10">
          <Link to="/" onClick={onClose} aria-label="Moungo Fish Farm home">
            <Logo compact />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="label-tech flex items-center gap-2 py-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            Close
            <span aria-hidden="true" className="text-base leading-none">
              ×
            </span>
          </button>
        </div>

        <nav
          aria-label="Main"
          className="flex flex-1 flex-col justify-center overflow-y-auto px-5 pb-10 sm:px-10"
        >
          <ul className="divide-y divide-border border-y border-border">
            {navItems.map((item, i) => (
              <li key={item.index}>
                <Link
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={onClose}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                  className={cn(
                    "group flex items-baseline gap-5 py-3.5 transition-all duration-500 sm:py-4",
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                  )}
                >
                  <span className="label-tech w-8 shrink-0 text-muted-foreground">
                    {item.index}
                  </span>
                  <span className="display-md text-foreground transition-colors group-hover:text-primary">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Link
              to="/contact"
              onClick={onClose}
              className="link-arrow inline-flex items-center gap-3 border border-primary/60 px-6 py-4 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Start a conversation
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <p className="label-tech text-muted-foreground">
              {siteConfig.shortName} / {contactConfig.address[1]} / Cameroon
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          scrolled || !transparent
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 sm:px-10">
          <Link to="/" aria-label="Moungo Fish Farm home" className="text-foreground">
            <Logo compact />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="label-tech hidden text-muted-foreground transition-colors hover:text-foreground md:inline-block"
            >
              Start a conversation
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="label-tech group flex items-center gap-3 py-2 text-foreground"
            >
              <span className="hidden sm:inline">Menu</span>
              <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
                <span className="h-px w-full bg-current transition-transform duration-300 group-hover:-translate-y-px" />
                <span className="h-px w-full bg-current transition-transform duration-300 group-hover:translate-y-px" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
