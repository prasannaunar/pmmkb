const ICON_PATHS: Record<number, React.ReactNode> = {
  // Market & Customer Understanding: magnifying glass
  1: <circle cx="10" cy="10" r="6" />,
  // Positioning & Messaging: speech bubble
  2: (
    <path d="M4 5h16v10H8l-4 4V5z" />
  ),
  // Competitive Strategy: target
  3: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  // Go-to-Market & Launch: arrow up-right
  4: <path d="M7 17 17 7M9 7h8v8" />,
  // Lifecycle & Workflow: refresh loop
  5: (
    <path d="M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5" />
  ),
  // Product Experience & Adoption: stacked layers
  6: (
    <path d="m12 4 8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
  ),
  // Strategy & Planning: compass
  7: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2z" />
    </>
  ),
  // Pricing & Packaging: price tag
  8: (
    <>
      <path d="M12 4h6v6l-9 9-6-6 9-9z" />
      <circle cx="15" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  // Sales Enablement: briefcase
  9: (
    <>
      <rect x="3.5" y="7.5" width="17" height="11" rx="1.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
    </>
  ),
};

const CONCEPTS_ICON = (
  <path d="M4 5.5A2 2 0 0 1 6 4h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-12.5zM4 17.5A2 2 0 0 1 6 16h12" />
);

export function CategoryIcon({
  number,
  className,
}: {
  number: number;
  className?: string;
}) {
  const path = ICON_PATHS[number] ?? CONCEPTS_ICON;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
