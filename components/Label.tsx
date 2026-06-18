type LabelProps = {
  /** optional section number, e.g. "01" */
  index?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

/**
 * Mono editorial caption — "01 / WEB DESIGN STUDIO" style labels used for
 * eyebrows, section numbers and status text throughout the site.
 */
export default function Label({ index, children, dark = false, className = "" }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-mono ${
        dark ? "text-butter" : "text-bluegrey-dark"
      } ${className}`}
    >
      {index && (
        <>
          <span className={dark ? "text-cream/50" : "text-charcoal/40"}>{index}</span>
          <span className={dark ? "text-cream/30" : "text-charcoal/25"} aria-hidden="true">
            /
          </span>
        </>
      )}
      {children}
    </span>
  );
}
