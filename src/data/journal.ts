/**
 * Journal entries. Replace the placeholders with real articles — the layout
 * adapts to however many entries exist here.
 */

export type JournalEntry = {
  category: "Aquaculture" | "Farm life" | "Training" | "Harvest" | "Insights";
  title: string;
  excerpt: string;
  date: string;
  href?: string;
};

export const journalEntries: JournalEntry[] = [
  {
    category: "Aquaculture",
    title: "Article title will appear here.",
    excerpt: "A short standfirst introducing the piece will sit here.",
    date: "[DATE]",
  },
  {
    category: "Training",
    title: "Article title will appear here.",
    excerpt: "A short standfirst introducing the piece will sit here.",
    date: "[DATE]",
  },
  {
    category: "Harvest",
    title: "Article title will appear here.",
    excerpt: "A short standfirst introducing the piece will sit here.",
    date: "[DATE]",
  },
];
