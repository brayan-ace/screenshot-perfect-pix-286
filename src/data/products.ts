import { images, type Asset } from "./assets";

export type ProductCategory = {
  index: string;
  title: string;
  audience: string;
  description: string;
  points: string[];
  image: Asset;
};

export const productCategories: ProductCategory[] = [
  {
    index: "01",
    title: "Fingerlings",
    audience: "For fish farmers",
    description:
      "Good stock changes the economics of a farm. Fingerlings are the starting point of every production cycle.",
    points: ["Tilapia fingerlings", "Catfish fingerlings", "Quantities: [CONFIRM AVAILABLE SIZES]"],
    image: images.fingerlings,
  },
  {
    index: "02",
    title: "Table-size fish",
    audience: "For restaurants, retailers and households",
    description:
      "Fish grown to market size on the farm, handled with care from the cage to the crate.",
    points: ["Tilapia", "Catfish", "Pricing: [ADD CURRENT PRICE]"],
    image: images.tableSizeTilapia,
  },
  {
    index: "03",
    title: "Feed & inputs",
    audience: "For aquaculture operations",
    description:
      "Feed management is central to consistent growth. Inputs support the daily work of running a farm.",
    points: ["Fish feed", "Aquaculture inputs", "Range: [CONFIRM PRODUCT LIST]"],
    image: images.floatingCage,
  },
  {
    index: "04",
    title: "Farm support",
    audience: "For people building or improving fish farms",
    description:
      "Practical guidance for setting up, running and improving a fish farming operation.",
    points: ["Consulting", "Farm setup guidance", "Ongoing farmer support"],
    image: images.farmTeam,
  },
];

export type Species = {
  index: string;
  name: string;
  latin?: string;
  description: string;
  context: string;
  image: Asset;
};

export const species: Species[] = [
  {
    index: "01",
    name: "Tilapia",
    latin: "Oreochromis spp.",
    description:
      "A freshwater fish widely farmed across Africa, valued for its growth in warm water and its place on everyday tables.",
    context: "Farmed in floating cages and ponds, from fingerling to table size.",
    image: images.heroTilapia,
  },
  {
    index: "02",
    name: "Catfish",
    latin: "Clarias spp.",
    description:
      "A hardy freshwater species long farmed in the region, tolerant of a wide range of pond conditions.",
    context: "Raised alongside tilapia, with its own feeding and handling rhythm.",
    image: images.harvest,
  },
  {
    index: "03",
    name: "Loko Red",
    description: "[CONFIRM DESCRIPTION OF THIS VARIETY]",
    context: "Listed in the farm's public material. Details to be confirmed.",
    image: images.tableSizeTilapia,
  },
  {
    index: "04",
    name: "Noum's Black",
    description: "[CONFIRM DESCRIPTION OF THIS VARIETY]",
    context: "Listed in the farm's public material. Details to be confirmed.",
    image: images.fingerlings,
  },
];
