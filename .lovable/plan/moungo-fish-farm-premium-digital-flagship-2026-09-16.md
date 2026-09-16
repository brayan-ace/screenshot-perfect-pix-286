# Moungo Fish Farm — Premium Digital Flagship

A cinematic, editorial website for an ambitious Cameroonian aquaculture business. Dark, water-led storytelling: fish → farm → system → people → industry → future. No invented facts — anything unverified appears as a clearly marked placeholder you can replace.

## Pages

- **Home** — the full immersive story (sections below)
- **Products** — fingerlings, table-size fish, feed & inputs, farm support
- **Training** — students, young farmers, hands-on learning
- **Contact** — call, WhatsApp, email, visit, location block

Menu items that don't have their own page (Our Story, Aquaculture, Impact, Journal) link to their section on the home page.

## Home page flow

1. **The Water** — full-screen dark aquatic opening with one realistic tilapia, subtle particles and light drift. Floating logo top-left, menu top-right, "Scroll to enter" bottom, small "Mungo River · Cameroon" label.
2. **Scroll transition** — the fish drifts and dissolves as the water opens into a real farm scene; the headline "GROWING MORE THAN FISH." emerges in staggered reveals with two calls to action.
3. **From two cages to a growing vision** — editorial timeline over a large farm image.
4. **More than a farm** — four pillars: Fingerlings, Grow-out, Farm inputs, Knowledge & support, told with large photography, not small cards.
5. **Built around the fish** — species section (Tilapia, Catfish; varieties left as editable entries).
6. **Where water meets science** — floating-cage scene where water quality, stocking, feeding, biosecurity and growth reveal on scroll, written as educational statements.
7. **From the farm to your operation** — product categories.
8. **Training** — photographic collage and story.
9. **Why aquaculture matters** — food security, local production, youth opportunity, knowledge.
10. **From water to table** — full-bleed harvest imagery.
11. **Fresh from the farm** — availability block driven by an editable data file; shows "Check current availability" when nothing is set.
12. **Journal** — editorial cards with labelled placeholders, easy to fill later.
13. **The future is growing** — dark emotional close with "Start a conversation".
14. **Contact + footer** — minimal, with location and social links.

## Brand and design

- New logo system drawn as clean vector shapes: a refined fish silhouette formed by a water current with organic growth geometry. Horizontal lockup, symbol only, light and dark versions, monochrome, favicon and social avatar.
- Colour system: near-black aquatic navy, deep ocean blue, dark teal, natural green, muted cyan, warm off-white, sand accent — all as adjustable design tokens.
- Typography: editorial display face for the big lines, clean sans for body and technical labels, fluid sizing so nothing overflows on small phones.
- Premium detail layer: section numbers, thin dividers, small technical labels, subtle grain, editorial captions. Restrained, not decorative.
- Fullscreen menu overlay with numbered navigation and a prominent "Start a conversation" action; subtle desktop cursor, disabled on touch.
- Floating WhatsApp action on mobile, pointing at a single central number setting.

## Imagery

I'll generate original visuals matching African freshwater aquaculture: hero tilapia, Mungo river water, floating cages, fingerlings, table-size tilapia, harvest, training, farm team. All referenced through one central asset list so real photos can replace them one by one.

## Content honesty

No invented numbers, awards, certifications, partners, testimonials or prices. Unknown details appear as visible markers such as [VERIFY PHONE], [VERIFY EMAIL], [CONFIRM CURRENT NUMBER]. Contact details will be placeholders until you send the real ones.

## Quality requirements

- Deliberate mobile design, checked from 320px up to 1920px.
- Motion built from lightweight transforms and opacity only; full reduced-motion alternative that keeps the storytelling.
- Semantic structure, keyboard access, visible focus, meaningful alt text, strong contrast.
- SEO: "Moungo Fish Farm | Aquaculture in Cameroon", per-page descriptions, social preview metadata, favicon, robots and sitemap.

## Technical notes

- TanStack Start routes: `/` (rewriting the placeholder index), `/products`, `/training`, `/contact`; each with its own head metadata.
- Design tokens defined in `src/styles.css`; no hardcoded colour utilities in components.
- Components grouped under `src/components/` (navigation, hero, sections, products, journal, contact, footer); business data centralised in `src/data/` (`site.ts`, `products.ts`, `contact.ts`, `journal.ts`, `availability.ts`, `assets.ts`).
- Scroll animation via an IntersectionObserver + scroll-progress hook using transform/opacity only; no WebGL, no heavy animation library.
- Logo built as inline SVG components; favicon exported as a real file in `public/`.
- Generated images stored as project assets and imported through the central asset map.

## Open item

Real phone, WhatsApp, email and farm address — send them whenever you have them and I'll swap out the placeholders.
