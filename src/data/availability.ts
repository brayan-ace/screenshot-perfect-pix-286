/**
 * Fresh-from-the-farm availability.
 * Leave `items` empty and the site shows "Check current availability" instead.
 * This is a manual list, not live data.
 */

export type AvailabilityItem = {
  product: string;
  status: "Available" | "Limited" | "On request";
  note: string;
  updated: string;
};

export const availability: AvailabilityItem[] = [];

export const availabilityUpdatedAt = "[CONFIRM LAST UPDATE]";
