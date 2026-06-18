import Label from "@/components/Label";

type SectionHeadingProps = {
  eyebrow?: string;
  /** optional mono section number, e.g. "02" */
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment} mb-12 md:mb-16`}>
      {eyebrow && (
        <Label index={index} dark={dark} className="mb-4">
          {eyebrow}
        </Label>
      )}
      <h2
        className={`text-3xl font-semibold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl ${
          dark ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-cream/70" : "text-charcoal/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
