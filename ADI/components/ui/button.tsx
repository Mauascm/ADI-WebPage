import Link, { type LinkProps } from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = SharedProps & LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const baseClasses =
  "group inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-primary/60 bg-primary/90 text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:bg-primary",
  secondary:
    "border-border/80 bg-glass/40 text-fg backdrop-blur-md hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary",
  ghost: "border-transparent bg-transparent text-fg hover:text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-6",
  lg: "h-12 px-7 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonAsButton>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  );
});

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonAsLink) {
  return (
    <Link
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  );
}
