type IconProps = {
  className?: string;
  title?: string;
};

/**
 * Official Facebook Icon
 * Brand color: #1877F2 (Official Meta blue)
 * Features an authentic circular badge with crisp white 'f'.
 */
export function FacebookIcon({ className = "h-7 w-7", title = "Facebook" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      {/* Crisp white underlay so the cutout 'f' renders pure white */}
      <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
      {/* Official Facebook path: #1877F2 circular badge with cutout 'f' */}
      <path
        fill="#1877F2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
      />
    </svg>
  );
}

/**
 * Official LinkedIn Icon
 * Brand color: #0A66C2 (Official LinkedIn blue)
 * Features an authentic rounded square with crisp white 'in'.
 */
export function LinkedInIcon({ className = "h-7 w-7", title = "LinkedIn" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      {/* Crisp white underlay so the cutout 'in' renders pure white */}
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#FFFFFF" />
      {/* Official LinkedIn path: #0A66C2 rounded square with cutout 'i' and 'n' */}
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM6.867 20.452H3.807V9h3.06v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
      />
    </svg>
  );
}
