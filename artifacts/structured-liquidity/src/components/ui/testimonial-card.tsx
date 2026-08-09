import * as React from "react";
import { cn } from "@/lib/utils";

/** Field-sourced quote card shared by advisory and family-facing products. */
export function TestimonialCard({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <figure className={cn("sl-testimonial", className)} {...props} />;
}

export function TestimonialSource({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-testimonial-source", className)} {...props} />;
}

export function TestimonialQuote({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <blockquote className={cn("sl-testimonial-quote", className)} {...props} />;
}

export function TestimonialAuthor({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <figcaption className={cn("sl-testimonial-author", className)} {...props} />;
}

export function TestimonialMeta({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("sl-testimonial-meta", className)} {...props} />;
}
