import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("mb-10 space-y-4", centered && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className={cn("max-w-2xl text-sm text-muted-foreground sm:text-base", centered && "mx-auto")}>
          {description}
        </p>
      ) : null}
      {actions ? <div className="pt-1">{actions}</div> : null}
    </div>
  );
}
