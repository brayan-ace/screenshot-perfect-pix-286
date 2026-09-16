import { useEffect, useRef, useState } from "react";
import { ArrowLink } from "@/components/editorial";
import { images } from "@/data/assets";
import { siteConfig } from "@/data/site";

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Screen 00 — the water — transitioning on scroll into the farm and the hero.
 * Only opacity and transform change, driven by one rAF-throttled scroll listener.
 */
export function OpeningScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrapRef.current;
      if (!el) return;
      const travel = el.offsetHeight - window.innerHeight;
      if (travel <= 0) return setP(1);
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), travel);
      setP(scrolled / travel);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const fishOut = smoothstep(0.25, 0.72, p);
  const farmIn = smoothstep(0.32, 0.78, p);
  const textIn = smoothstep(0.58, 0.92, p);
  const chromeOut = smoothstep(0, 0.22, p);

  const move = (value: string) => (reduced ? undefined : value);

  return (
    <div ref={wrapRef} className="relative h-[240vh]">
      <section
        aria-label="Entering Moungo Fish Farm"
        className="sticky top-0 h-screen overflow-hidden bg-background"
      >
        {/* water depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 18%, oklch(0.28 0.05 214 / 0.9) 0%, oklch(0.14 0.03 238) 62%, oklch(0.11 0.025 240) 100%)",
          }}
        />

        {/* the fish */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: 1 - fishOut,
            transform: move(
              `translate3d(${-fishOut * 14}%, 0, 0) scale(${1 + fishOut * 0.5})`,
            ),
          }}
        >
          <img
            src={images.heroTilapia.src}
            alt={images.heroTilapia.alt}
            width={images.heroTilapia.width}
            height={images.heroTilapia.height}
            fetchPriority="high"
            className="animate-drift h-auto w-[150%] max-w-none object-contain sm:w-[100%] lg:w-[78%]"
            style={{
              mixBlendMode: "screen",
              maskImage:
                "radial-gradient(ellipse 62% 58% at 50% 50%, #000 42%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 62% 58% at 50% 50%, #000 42%, transparent 78%)",
            }}
          />
        </div>

        {/* the farm emerging */}
        <div
          className="absolute inset-0"
          style={{
            opacity: farmIn,
            transform: move(`scale(${1.12 - farmIn * 0.12})`),
          }}
        >
          <img
            src={images.floatingCage.src}
            alt={images.floatingCage.alt}
            width={images.floatingCage.width}
            height={images.floatingCage.height}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.13_0.028_238)_6%,oklch(0.13_0.028_238/0.55)_48%,oklch(0.13_0.028_238/0.72)_100%)]" />
        </div>

        <div className="grain-overlay absolute inset-0" aria-hidden="true" />

        {/* hero copy */}
        <div
          className="absolute inset-x-0 bottom-0 px-5 pb-20 sm:px-10 sm:pb-24"
          style={{
            opacity: textIn,
            transform: move(`translate3d(0, ${(1 - textIn) * 28}px, 0)`),
          }}
        >
          <div className="mx-auto max-w-7xl">
            <p className="label-tech text-primary">MFF / Aquaculture / 001</p>
            <h1 className="display-xl mt-5 max-w-4xl text-foreground">
              Growing more
              <br />
              than fish.
            </h1>
            <p className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg">
              From quality aquaculture production to farmer development and sustainable fish
              farming, Moungo Fish Farm is building from Cameroon toward a stronger future for
              African aquaculture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ArrowLink to="/" hash="story" variant="solid">
                Explore the farm
              </ArrowLink>
              <ArrowLink to="/products" variant="outline">
                Our products
              </ArrowLink>
            </div>
          </div>
        </div>

        {/* opening chrome */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-8 sm:px-10"
          style={{ opacity: 1 - chromeOut }}
        >
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
            <p className="label-tech leading-relaxed text-foreground/70">
              Mungo River
              <br />
              Cameroon
            </p>
            <div className="flex flex-col items-center gap-3">
              <span className="label-tech text-foreground/70">Scroll to enter</span>
              <span
                aria-hidden="true"
                className="relative block h-10 w-px overflow-hidden bg-foreground/20"
              >
                <span className="animate-scroll-cue absolute inset-x-0 top-0 block h-4 bg-primary" />
              </span>
            </div>
            <p className="label-tech hidden text-right leading-relaxed text-foreground/70 sm:block">
              {siteConfig.shortName}
              <br />
              001
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
