/**
 * Central business information for Moungo Fish Farm.
 * All contact details confirmed and populated.
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
  phone: "+237 650 20 58 80",
  phoneHref: "tel:+237650205880",
  whatsapp: "+1 424 371 3830",
  /** Single source of truth for every WhatsApp link on the site. */
  whatsappHref: "https://wa.me/14243713830",
  email: "moungofishfarm@gmail.com",
  emailHref: "mailto:moungofishfarm@gmail.com",
  address: ["Mungo Bridge", "Littoral Region", "Cameroon"],
  /** Google Maps embed URL for the farm location. */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0!2d9.58!3d4.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMungo+Bridge!5e0!3m2!1sen!2scm!4v1694800000000!5m2!1sen!2scm",
  /** Google Maps shareable link */
  mapShareUrl: "https://share.google/vrL34vZRAy5mmdHyf",
  hours: "Mon – Sat · 7 AM – 5 PM WAT",
} as const;

export const socialConfig: { label: string; href: string; icon: string }[] = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/Mungofishfarm/",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://cm.linkedin.com/company/moungo-fish-farm",
    icon: "linkedin",
  },
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
