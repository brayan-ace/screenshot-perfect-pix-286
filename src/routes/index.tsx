import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { OpeningScene } from "@/components/sections/OpeningScene";
import {
  CagesSection,
  EcosystemSection,
  SpeciesSection,
  StorySection,
} from "@/components/sections/StoryAndSystem";
import {
  HarvestSection,
  ProductsSection,
} from "@/components/sections/CommerceSections";
import {
  FutureSection,
  ImpactSection,
  TrainingSection,
} from "@/components/sections/PeopleSections";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useReveal } from "@/hooks/useReveal";

const title = "Moungo Fish Farm | Aquaculture in Cameroon";
const description =
  "Tilapia and catfish aquaculture from the Mungo, Cameroon. Fingerlings, table-size fish, feed and inputs, and training for a growing generation of fish farmers.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  useReveal();

  return (
    <>
      <SiteHeader transparent />
      <main>
        <OpeningScene />
        <StorySection />
        <EcosystemSection />
        <SpeciesSection />
        <CagesSection />
        <ProductsSection />
        <TrainingSection />
        <ImpactSection />
        <HarvestSection />
        <NewsletterSection />
        <FutureSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
