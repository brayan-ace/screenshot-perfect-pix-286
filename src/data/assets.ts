/**
 * Central image map. Swap a file here and it updates everywhere on the site.
 * Replace these with real Moungo Fish Farm photography when available.
 */
import heroTilapia from "@/assets/hero-tilapia.jpg";
import mungoRiver from "@/assets/mungo-river.jpg";
import floatingCage from "@/assets/floating-cage.jpg";
import farmTeam from "@/assets/farm-team.jpg";
import fingerlings from "@/assets/fingerlings.jpg";
import tableSizeTilapia from "@/assets/table-size-tilapia.jpg";
import training from "@/assets/training.jpg";
import harvest from "@/assets/harvest.jpg";

export type Asset = { src: string; alt: string; width: number; height: number };

export const images = {
  heroTilapia: {
    src: heroTilapia,
    alt: "A single tilapia suspended in dark freshwater",
    width: 1536,
    height: 1024,
  },
  mungoRiver: {
    src: mungoRiver,
    alt: "The Mungo river at first light, mist over still water",
    width: 1536,
    height: 1024,
  },
  floatingCage: {
    src: floatingCage,
    alt: "Floating fish cages on a wide river at dawn",
    width: 1536,
    height: 1024,
  },
  farmTeam: {
    src: farmTeam,
    alt: "Members of a fish farm team standing beside the water",
    width: 1024,
    height: 1280,
  },
  fingerlings: {
    src: fingerlings,
    alt: "Young tilapia fingerlings swimming in clear water",
    width: 1024,
    height: 1280,
  },
  tableSizeTilapia: {
    src: tableSizeTilapia,
    alt: "A fresh table-size tilapia on dark stone",
    width: 1024,
    height: 1280,
  },
  training: {
    src: training,
    alt: "A trainer showing fish feed to young farmers beside a pond",
    width: 1536,
    height: 1024,
  },
  harvest: {
    src: harvest,
    alt: "Hands lifting a net of fresh tilapia out of the water at harvest",
    width: 1536,
    height: 1024,
  },
} satisfies Record<string, Asset>;
