import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-sky-600/60 dark:bg-cyan-400/60" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-cyan-400">
          {eyebrow}
        </span>
      </div>
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
