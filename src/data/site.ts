/**
 * Central business information for Moungo Fish Farm.
 * Replace the [VERIFY …] placeholders with confirmed details — nothing else needs editing.
 */

export const siteConfig = {
  name: "Moungo Fish Farm",
  shortName: "MFF",
  tagline: "Aquaculture from Cameroon.",
  location: "Mungo Bridge · Cameroon",
  locationShort: "Mungo River, Cameroon",
  description:
    "Aquaculture from the Mungo, Cameroon. Tilapia and catfish production, fingerlings, farm inputs and training for a growing generation of fish farmers.",
} as const;

export const contactConfig = {
  phone: "[VERIFY PHONE]",
  phoneHref: "", // e.g. "tel:+237XXXXXXXXX"
  whatsapp: "[VERIFY WHATSAPP NUMBER]",
  /** Single source of truth for every WhatsApp link on the site. */
  whatsappHref: "", // e.g. "https://wa.me/237XXXXXXXXX"
  email: "[VERIFY EMAIL]",
  emailHref: "", // e.g. "mailto:hello@example.com"
  address: ["[VERIFY STREET / LANDMARK]", "Mungo Bridge", "Littoral, Cameroon"],
  /** Paste the verified Google Maps embed URL here to replace the map placeholder. */
  mapEmbedUrl: "",
  hours: "[VERIFY OPENING HOURS]",
} as const;

export const socialConfig: { label: string; href: string }[] = [
  { label: "Facebook", href: "" },
  { label: "Instagram", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "YouTube", href: "" },
];

export type NavItem = {
  index: string;
  label: string;
  to: string;
  hash?: string;
};

export const navItems: NavItem[] = [
  { index: "01", label: "Home", to: "/" },
  { index: "02", label: "Our Story", to: "/", hash: "story" },
  { index: "03", label: "Aquaculture", to: "/", hash: "aquaculture" },
  { index: "04", label: "Products", to: "/products" },
  { index: "05", label: "Training", to: "/training" },
  { index: "06", label: "Impact", to: "/", hash: "impact" },
  { index: "07", label: "Journal", to: "/", hash: "journal" },
  { index: "08", label: "Contact", to: "/contact" },
];
