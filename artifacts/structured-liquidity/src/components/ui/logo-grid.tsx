import * as React from "react";
import { cn } from "@/lib/utils";

/** Responsive identity grid generalized from portfolio and trust surfaces. */
export function LogoGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-logo-grid", className)} {...props} />;
}

export function LogoTile({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <article className={cn("sl-logo-tile", className)} {...props} />;
}

export function LogoMark({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-logo-mark", className)} {...props} />;
}

export function LogoLabel({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("sl-logo-label", className)} {...props} />;
}
