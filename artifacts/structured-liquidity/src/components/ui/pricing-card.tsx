import * as React from "react";
import { cn } from "@/lib/utils";

export function PricingGrid({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-pricing-grid", className)} {...props} />;
}

export interface PricingCardProps extends React.HTMLAttributes<HTMLElement> {
  featured?: boolean;
}

/** Plan, package, or subscription card with one clear conversion action. */
export function PricingCard({
  className,
  featured,
  ...props
}: PricingCardProps) {
  return (
    <article
      className={cn("sl-pricing-card", className)}
      data-featured={featured || undefined}
      {...props}
    />
  );
}

export function PricingHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-pricing-header", className)} {...props} />;
}

export function PricingName({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("sl-pricing-name", className)} {...props} />;
}

export function PricingPrice({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-pricing-price", className)} {...props} />;
}

export function PricingAmount({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("sl-pricing-amount", className)} {...props} />;
}

export function PricingCadence({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("sl-pricing-cadence", className)} {...props} />;
}

export function PricingDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("sl-pricing-description", className)} {...props} />;
}

export function PricingFeatures({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("sl-pricing-features", className)} {...props} />;
}

export function PricingFeature({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("sl-pricing-feature", className)} {...props} />;
}

export function PricingFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("sl-pricing-footer", className)} {...props} />;
}
