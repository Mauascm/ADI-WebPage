import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-glass/45 p-6 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60",
        className,
      )}
      {...props}
    />
  );
}
